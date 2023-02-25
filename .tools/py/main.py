# coding=utf-8
import glob
import sys
import argparse
import traceback

from bs4 import BeautifulSoup, Tag, NavigableString, PageElement, Comment
from typing import List
from shared.common import *
from formats.txt import write_txt, load_txt_trans_file
from formats.xlsx import write_xlsx, load_xlsx_trans_file
from formats.m_csv import write_csv
from shared.port import *

CSV_FORMAT = 0
TXT_FORMAT = 1
XLSX_FORMAT = 2

TITLE_TAG = 'title'
META_TAG = 'meta'
TRANS_TAG = 'trans'
SCRIPT_TAG = 'script'

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

    for string in strings_it:  # type: NavigableString
        if string.strip():
            parent_elem = string.parent
            parent_class = parent_elem.attrs.get('class')
            is_voice_line = False
            curr_voice_class = None

            if parent_class:
                if U'jp-play' in parent_class:
                    is_voice_line = True
                    curr_voice_class = U'jp-play'
                elif U'jp-pause' in parent_class:
                    is_voice_line = True
                    curr_voice_class = U'jp-pause'
                elif U'novel_copyright' in parent_class:
                    continue

            text_line_elems = []
            text_line = unicode(string)
            text_line_elems.append(string)

            next_str = string.next_sibling  # type: Tag | PageElement
            while next_str is not None:
                if next_str.name == 'ruby':
                    text_line += unicode(next_str)
                    text_line_elems.append(next_str)
                    next_str = next_str.next_sibling

                    next(strings_it)  # text
                    next(strings_it)  # furigana

                elif type(next_str) is NavigableString:
                    if next_str.strip():
                        text_line += unicode(next_str)
                        text_line_elems.append(next_str)
                        next_str = next_str.next_sibling
                        next(strings_it)

                else:
                    break

            if prev_string == text_line and curr_voice_class == U'jp-pause':
                # duplicate text voice -> map to prev idx
                string_elem_idxs.append([str_idx - 1, text_line_elems])
                continue
            else:
                string_elem_idxs.append([str_idx, text_line_elems])

                result.append([unicode(str_idx), text_line, U'', U''])
                prev_string = text_line
                str_idx += 1

    # replace text elem with trans tag
    for idx, strings in string_elem_idxs:
        trans_tag = BeautifulSoup(U"<{} idx=\"{}\">{}</{}>"
                                  .format(TRANS_TAG, idx, U''
                                          .join([unicode(s) for s in strings]), TRANS_TAG),
                                  'html.parser')

        while len(strings) > 1:
            string = strings.pop()
            string.replace_with("")

        strings[0].replace_with(trans_tag)

    return result


def html_clean_unused_data(dom):
    # type: (Tag) -> None

    srcs_match = [U'google-analytics.com',
                  U'googletagmanager.com/gtag']
    contents_match = [U"_gaq.push(['_trackPageview']);",
                      U"gtag('config', 'G-4Z0EPTDG5M');"]

    script_tags = dom.find_all(SCRIPT_TAG)
    for sc_tag in script_tags:  # type: Tag
        src_attr = sc_tag.attrs.get('src')
        if src_attr is not None:
            for src in srcs_match:
                if src in src_attr:
                    sc_tag.replace_with(Comment('removed'))
                    break
        else:
            for content in contents_match:
                if content in unicode(sc_tag):
                    sc_tag.replace_with(Comment('removed'))
                    break
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
        elif out_format == TXT_FORMAT:
            out_path = U'{}/{}.txt'.format(out_folder, filename)
            write_txt(out_path, head_rows + body_rows)
        else:
            raise ValueError('Output format is not support!')

        html_clean_unused_data(dom)

        html_out_path = U'{}/{}.html'.format(html_out_folder, filename)
        print(U"\t\t-> '{}'".format(out_path))
        print(U"\t\t-> '{}'".format(html_out_path))

        open(html_out_path, 'wb').write(str(dom).encode('utf8'))

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
        filename = get_filename(trans_file_path, False)
        html_out_path = U'{}/{}.html'.format(html_out_folder, filename)

        print(U"'{}' -> '{}'".format(trans_file_path, html_out_path))
        html_input_path = U'{}/{}.html'.format(html_dump_folder, filename)

        if not is_file(html_input_path):
            print(U'[WARNING]: File "{}" not found! -> skip'.format(html_input_path))
            continue

        html_text = open(html_input_path, 'rb').read()
        dom = BeautifulSoup(html_text, features="html.parser")

        rows = []
        if in_format == XLSX_FORMAT:
            rows = load_xlsx_trans_file(trans_file_path)
        elif in_format == TXT_FORMAT:
            rows = load_txt_trans_file(trans_file_path)

        head = dom.head  # type: Tag
        body = dom.body  # type: Tag

        trans_elems = body.find_all(TRANS_TAG)

        for row in rows:
            line_id, jp_text, vn_text = row
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
                # elems = body.find_all(TRANS_TAG, attrs={'idx': line_id_clean})
                elems = []

                for elem in trans_elems:  # type: Tag
                    elem_idx = elem.attrs.get('idx')
                    if elem_idx is not None and elem_idx == line_id_clean:
                        elems.append(elem)

                if len(elems) == 0:
                    print(U'[WARNING]: elem <{} idx="{}"> not found!'.format(TRANS_TAG, line_id_clean))
                    continue

                for elem in elems:
                    new_elem = BeautifulSoup(trans_text, features="html.parser")
                    elem.replace_with(new_elem)

        open(html_out_path, 'wb').write(str(dom).encode('utf8'))

    pass


def main():
    # sys.argv.extend(['-t2h', 'data/trans', 'data/trans/html', 'data/out', '-f', '1'])
    # sys.argv.extend(['-h2t', 'data/key.visualarts.gr.jp_full', 'data/dump', '-f', '2'])

    parser = argparse.ArgumentParser(description='primaldoll tool')
    parser.add_argument('-v', '--version', action='version', version="1.0")

    parser.add_argument('-f', help='translate file format: txt=1 xlsx=2', type=int, default=TXT_FORMAT)

    parser.add_argument('-h2t', nargs=2, type=str, metavar=('html_folder', 'output_folder'),
                        help='html to text.')

    parser.add_argument('-t2h', nargs=3, type=str, metavar=('trans_folder', 'html_dump_folder', 'output_folder'),
                        help='text to html.')

    args = parser.parse_args()

    if len(sys.argv) <= 1:
        parser.print_help()

    if args.h2t:
        argv = args.h2t
        try:
            html_to_text(argv[0], argv[1], args.f)
        except Exception:
            print('::error title= Convert html to txt error!')
            traceback.print_exc()
    elif args.t2h:
        argv = args.t2h
        try:
            text_to_html(argv[0], argv[1], argv[2], args.f)
        except Exception:
            print('::error title= Convert txt to html error!')
            traceback.print_exc()


    pass


if __name__ == '__main__':
    main()
