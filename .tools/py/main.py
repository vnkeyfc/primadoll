# coding=utf-8
import glob
import csv
import sys
import argparse

from bs4 import BeautifulSoup, Tag, NavigableString
from openpyxl import Workbook, load_workbook
from openpyxl.styles import PatternFill, Border, Side, Alignment, Protection, Font
from typing import List
from shared.common import *
from math import ceil

CSV_FORMAT = 0
TXT_FORMAT = 1
XLSX_FORMAT = 2

TITLE_TAG = 'title'
META_TAG = 'meta'
TRANS_TAG = 'trans'

META_NAME = [U'description', U'keywords']
META_PROP = [U'og:title', U'og:site_name', U'og:description']

PROPERTY = 'property'
CONTENT = 'content'
NAME = 'name'

CSV_HEADER = [U'ID', U'JP', U'VN', U'Notes']


def dump_head_text(head_elem):
    # type: (Tag) -> List

    result = []
    tags = head_elem.find_all([TITLE_TAG, META_TAG])  # type: List[Tag]

    for tag in tags:
        if tag.name == META_TAG:
            name_attr = tag.attrs.get(NAME)
            prop_attr = tag.attrs.get(PROPERTY)
            content = tag.attrs.get(CONTENT)

            if name_attr is not None and name_attr in META_NAME:
                result.append([U'{}_{}'.format(META_TAG, name_attr),
                               content,
                               U'',
                               U''])
            elif prop_attr is not None and prop_attr in META_PROP:
                result.append([U'{}_{}'.format(META_TAG, prop_attr),
                               content,
                               U'',
                               U''])

        elif tag.name == TITLE_TAG:
            result.append([TITLE_TAG, tag.text, U''])

    return result


def dump_body_text(body_elem):
    # type: (Tag) -> List

    result = []
    str_idx = 0

    prev_string = U''
    string_elem_idxs = []
    strings_it = iter(body_elem.strings)
    is_voice_line = False
    curr_voice_class = None

    for string in strings_it:  # type: NavigableString
        if string.strip():
            parent_elem = string.parent
            parent_class = parent_elem.attrs.get('class')

            if parent_class:
                if U'jp-play' in parent_class:
                    is_voice_line = True
                    curr_voice_class = U'jp-play'
                elif U'jp-pause' in parent_class:
                    is_voice_line = True
                    curr_voice_class = U'jp-pause'
                else:
                    is_voice_line = False
                    curr_voice_class = None
            else:
                is_voice_line = False
                curr_voice_class = None

            if is_voice_line:
                tmp_string_elems = []

                voice_line = unicode(string)
                tmp_string_elems.append(string)

                next_str = string.next
                while True:
                    if next_str.name == 'ruby':
                        voice_line += unicode(next_str)
                        tmp_string_elems.append(next_str)

                        next_str = next_str.next_sibling
                        next(strings_it)  # text
                        next(strings_it)  # furigana
                    elif type(next_str) is NavigableString:
                        if next_str.strip():
                            voice_line += unicode(next_str)
                            tmp_string_elems.append(next_str)
                            next_str = next_str.next
                            next(strings_it)
                        else:
                            next(strings_it)
                            break
                    else:
                        break

                if prev_string == voice_line and curr_voice_class == U'jp-pause':
                    # duplicate text voice -> map to prev idx
                    string_elem_idxs.append([str_idx - 1, tmp_string_elems])
                    continue
                else:
                    string_elem_idxs.append([str_idx, tmp_string_elems])

                    result.append([unicode(str_idx), voice_line, U'', U''])
                    prev_string = voice_line
                    str_idx += 1
            else:
                result.append([unicode(str_idx), string, U'', U''])
                string_elem_idxs.append([str_idx, [string]])
                prev_string = unicode(string)
                str_idx += 1

    # replace text elem with trans tag
    for idx, strings in string_elem_idxs:
        trans_tag = BeautifulSoup("<{} idx=\"{}\"/>".format(TRANS_TAG, idx), 'html.parser')

        while len(strings) > 1:
            string = strings.pop()
            string.replace_with("")

        strings[0].replace_with(trans_tag)

    return result


def write_csv(out_path, rows):
    writer = csv.writer(
        open(out_path, 'wb'),
        delimiter=',', quotechar='"',
        quoting=csv.QUOTE_MINIMAL)

    for row in rows:
        writer.writerow([c.encode('utf8') for c in row])


def calc_row_height(text, font_size, col_width, line_height=16.0):
    line_count = 0
    for line in text.split(U'\n'):
        half_width_count = 0
        for c in line:
            n = ord(c)
            if n < 0x80:
                if n < 0x20:
                    continue
                half_width_count += 1
            else:
                half_width_count += 1
                try:
                    test_c = c.encode('cp932')
                    if len(test_c) > 1:
                        half_width_count += 1
                except UnicodeEncodeError:
                    pass

        char_per_line = int(ceil(col_width / (font_size * 0.1)) + 6)  # stupid calculator

        if half_width_count == 0:
            half_width_count = 1

        quotient, remainder = divmod(half_width_count,
                                     char_per_line)

        line_count += quotient
        if remainder > 0:
            line_count += 1

    return max([line_height, line_height * line_count])


def write_xlsx(out_path, header, rows):
    font_size = 12
    text_col_width = 100.0
    wb = Workbook()

    # grab the active worksheet
    ws = wb.active
    ws.title = get_filename(out_path, False)
    ws.append(header)

    # header row
    hfont = Font(name='Calibri',
                 size=font_size + 2,
                 bold=True)
    h_alignment = Alignment(wrap_text=True, vertical='center', horizontal='center')
    header_row = ws.row_dimensions[1]
    header_row.height = 20
    header_row.font = hfont
    header_row.alignment = h_alignment

    id_col = ws.column_dimensions['A']
    jp_col = ws.column_dimensions['B']
    vn_col = ws.column_dimensions['C']
    notes_col = ws.column_dimensions['D']

    alignment = Alignment(wrap_text=True, vertical='top')
    font = Font(name='Calibri',
                size=font_size,
                bold=False,
                italic=False,
                vertAlign=None,
                underline='none',
                strike=False,
                color='FF000000')

    # update style
    for i, col in enumerate([id_col, jp_col, vn_col, notes_col]):
        if i == 0:
            col.width = 20.0
        else:
            col.width = text_col_width
        col.bestFit = True
        col.auto_size = True
        col.alignment = alignment
        col.font = font

    # write row data
    row_idx = 2  # header row = 1
    for row in rows:
        ws.append(row)
        ws.row_dimensions[row_idx].height = calc_row_height(row[1], font_size, text_col_width)
        row_idx += 1

    wb.save(out_path)
    pass


def html_to_text(html_folder, out_folder, out_format=XLSX_FORMAT):
    html_paths = glob.glob(U'{}/*.html'.format(html_folder))

    # for import
    html_out_folder = U'{}/html'.format(out_folder)

    if is_folder(out_folder) is False:
        make_dirs(out_folder)
    if is_folder(html_out_folder) is False:
        make_dirs(html_out_folder)

    for html_path in html_paths:
        print(html_path)

        html_text = open(html_path, 'rb').read()
        dom = BeautifulSoup(html_text, features="html.parser")

        head_rows = dump_head_text(dom.head)
        body_rows = dump_body_text(dom.body)

        filename = get_filename(html_path, False)

        if out_format == CSV_FORMAT:
            out_path = U'{}/{}.csv'.format(out_folder, filename)
            write_csv(out_path, [CSV_HEADER] + head_rows + body_rows)
        elif out_format == XLSX_FORMAT:
            out_path = U'{}/{}.xlsx'.format(out_folder, filename)
            write_xlsx(out_path, CSV_HEADER, head_rows + body_rows)

        html_out_path = U'{}/{}.html'.format(html_out_folder, filename)
        open(html_out_path, 'wb').write(str(dom))

    pass


def load_xlsx_trans_file(xlsx_path):
    sheet_name = get_filename(xlsx_path, False)
    wb = load_workbook(xlsx_path, True)

    sheet = wb[sheet_name]

    rows_it = sheet.rows
    next(rows_it)  # skip header

    dict_result = {}

    for row in rows_it:
        line_id_cell = row[0]
        jp_text_cell = row[1]
        vn_text_cell = row[2]

        line_id = line_id_cell.value
        jp_text = jp_text_cell.value
        vn_text = vn_text_cell.value

        if line_id in dict_result:
            print(U'[WARNING]: Duplicate id: "{}" row={}'.format(line_id, line_id_cell.row))

        dict_result[line_id] = [jp_text, vn_text]
        pass

    return dict_result

    pass


def text_to_html(trans_folder, html_dump_folder, html_out_folder, in_format=XLSX_FORMAT):
    dict_format_support = {CSV_FORMAT: U'csv', TXT_FORMAT: U'txt', XLSX_FORMAT: U'xlsx'}
    f_format = dict_format_support.get(in_format)
    if f_format is None:
        raise 'Not support file format!'

    if not is_folder(html_out_folder):
        make_dirs(html_out_folder)

    trans_file_paths = glob.glob(U'{}/*.{}'.format(trans_folder, f_format))

    for trans_file_path in trans_file_paths:
        print(trans_file_path)
        filename = get_filename(trans_file_path, False)
        html_input_path = U'{}/{}.html'.format(html_dump_folder, filename)

        if not is_file(html_input_path):
            print(U'[WARNING]: File "{}" not found! -> skip'.format(html_input_path))
            continue

        html_text = open(html_input_path, 'rb').read()
        dom = BeautifulSoup(html_text, features="html.parser")

        dict_trans = {}
        if in_format == XLSX_FORMAT:
            dict_trans = load_xlsx_trans_file(trans_file_path)

        head = dom.head  # type: Tag
        body = dom.body  # type: Tag

        for line_id in dict_trans:
            jp_text, vn_text = dict_trans[line_id]
            trans_text = vn_text

            if trans_text is None or trans_text == U'':
                trans_text = jp_text

            line_id_clean = line_id.strip()
            if line_id_clean == TITLE_TAG:
                title_tag = head.find(TITLE_TAG)
                title_tag.string = trans_text
            elif line_id_clean.startswith(META_TAG):
                attr_val = line_id_clean.split(U'_', 1)[1]
                attr_name = None
                if attr_val in META_NAME:
                    attr_name = NAME
                elif attr_val in META_PROP:
                    attr_name = PROPERTY
                else:
                    print(U'[WARNING]: attr "{}" not found!'.format(attr_val))
                    continue

                elem = head.find(META_TAG, attrs={attr_name: attr_val})

                if elem is None:
                    print(U'[WARNING]: elem <meta {}="{}"> not found!'.format(attr_name, attr_val))
                    continue

                elem.attrs[CONTENT] = trans_text
            else:
                elems = body.find_all(TRANS_TAG, attrs={'idx': line_id_clean})

                if elems is None:
                    print(U'[WARNING]: elem <{} idx="{}"> not found!'.format(TRANS_TAG, line_id_clean))
                    continue

                for elem in elems:
                    new_elem = BeautifulSoup(trans_text, features="html.parser")
                    elem.replace_with(new_elem)

        html_out_path = U'{}/{}.html'.format(html_out_folder, filename)
        open(html_out_path, 'wb').write(str(dom))

    pass


def main():
    # sys.argv.extend(['-t2h', 'data/trans', 'data/trans/html', 'data/out'])
    # sys.argv.extend(['-h2t', 'data/key.visualarts.gr.jp', 'data/dump'])

    parser = argparse.ArgumentParser(description='primaldoll tool')
    parser.add_argument('-v', '--version', action='version', version="1.0")

    parser.add_argument('-f', help='translate file format.',
                        action='store_true', default=XLSX_FORMAT)

    parser.add_argument('-h2t', nargs=2, type=str, metavar=('html_folder', 'output_folder'),
                        help='html to text.')

    parser.add_argument('-t2h', nargs=3, type=str, metavar=('trans_folder', 'html_dump_folder', 'output_folder'),
                        help='html to text.')

    args = parser.parse_args()

    if len(sys.argv) <= 1:
        parser.print_help()

    if args.h2t:
        argv = args.h2t
        html_to_text(argv[0], argv[1], args.f)
    elif args.t2h:
        argv = args.t2h
        text_to_html(argv[0], argv[1], argv[2], args.f)

    pass


if __name__ == '__main__':
    main()
