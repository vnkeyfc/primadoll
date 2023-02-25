from io import StringIO

TXT_ID = 0
TXT_JP = 1
TXT_VN = 2
TXT_IDENTIFY = {U'ID': TXT_ID, U'JP': TXT_JP, U'VN': TXT_VN}
TXT_EX_END_FLAG = U'=--='
TXT_OPEN_TAG = U'<'
TXT_CLOSE_TAG = U'>'


def write_txt(out_path, rows):
    fi = open(out_path, 'wb')
    for row in rows:
        line_id = row[0]
        jp_text = U'' if row[1] is None else row[1].strip(U'\r\n')
        vn_text = U'' if row[2] is None else row[2]

        fi.write(U'<ID> {}\n'.format(line_id).encode('utf8'))
        fi.write(U'<JP> {}\n'.format(jp_text).encode('utf8'))
        fi.write(U'<VN> {}\n\n'.format(vn_text).encode('utf8'))
        fi.write(U'{}========================================\n'.format(TXT_EX_END_FLAG).encode('utf8'))

    fi.close()
    pass


def txt_clean_line(line, strip_char=None):
    ret = line.split(U'//', 1)[0]
    ret = ret.strip(strip_char)
    return ret


def txt_get_tag(fi):
    # type: (StringIO) -> [int, int]

    line_pos = fi.tell()
    line = fi.readline()

    # get identify tag
    identify_tag_str = None
    data_pos = -1
    while line != '':
        line_clean = txt_clean_line(line)
        open_pos = line.find(TXT_OPEN_TAG)
        if open_pos != -1 and line_clean[0] == TXT_OPEN_TAG:
            close_pos = line.find(TXT_CLOSE_TAG)
            if close_pos > open_pos:
                data_pos = line_pos + close_pos + 1
                identify_tag_str = line[open_pos + 1:close_pos]
                break
            else:
                print(U'[ERROR]: Close tag "{}" not found: {}'.format(TXT_CLOSE_TAG, line_clean))
                raise ValueError()
        elif len(line_clean) > 0:
            return None
            # print(U'[ERROR]: Invalid declare tag: {}'.format(line_clean))
            # raise ValueError()

        line_pos = fi.tell()
        line = fi.readline()

    if identify_tag_str is None:
        return None

    identify_tag = TXT_IDENTIFY.get(identify_tag_str.upper())
    if identify_tag is None:
        return None
        # print(U'[ERROR]: Invalid tag: {}'.format(identify_tag_str))
        # raise ValueError()

    return [identify_tag, data_pos]
    pass


def txt_get_text_data(fi, data_start_pos, clean_line=True):
    # type: (StringIO, int, bool) -> unicode

    text_arr = []
    fi.seek(data_start_pos)
    first_char = fi.read(1)

    if first_char not in [U' ', U'\n']:
        text_arr.append(first_char)

    line_pos = fi.tell()
    line = fi.readline()
    while line != U'':
        line_clean = txt_clean_line(line)
        if line_clean.startswith(TXT_OPEN_TAG):
            tmp_pos = fi.tell()
            fi.seek(line_pos)
            # try to detect tag
            tag_info = txt_get_tag(fi)
            if tag_info is not None:
                # is tag -> go back and return
                fi.seek(line_pos)
                break

            fi.seek(tmp_pos)

        if line_clean.startswith(TXT_EX_END_FLAG):
            break

        if clean_line:
            text_arr.append(txt_clean_line(line, U''))  # clean comment only
        else:
            text_arr.append(line)

        line_pos = fi.tell()
        line = fi.readline()

    res = U''.join(text_arr)
    if txt_clean_line(res, U'\n') == U'':
        return U''

    return res.replace(U'\\n', U'<br/>').rstrip(U'\n')


def load_txt_trans_file(txt_path, clean_line=True):
    fi = StringIO(open(txt_path, 'rb').read().replace(b'\r\n', b'\n').decode('utf8'))
    rows = []

    while True:
        start_pos = fi.tell()
        tag_info = txt_get_tag(fi)
        if tag_info is None:
            # check is eof
            fi.seek(start_pos)
            line = fi.readline()
            if line != U'':
                print(U'[ERROR]: Tag invalid: {}'.format(line))
                raise ValueError
            break

        identify_tag, data_pos = tag_info
        fi.seek(data_pos)

        if identify_tag != TXT_ID:
            print(U'[ERROR]: Require {}ID{} tag: {}'.format(TXT_OPEN_TAG, TXT_CLOSE_TAG, fi.readline()))
            raise ValueError

        line_id = txt_clean_line(fi.readline())

        rq_tag = [TXT_JP, TXT_VN]
        text_dict = {}
        line_pos = fi.tell()

        identify_tag1, data_pos = txt_get_tag(fi)  # expect jp
        if identify_tag1 not in rq_tag:
            fi.seek(line_pos)
            print(U'[ERROR]: Tag invalid: {}'.format(fi.readline()))
            raise ValueError

        text1 = txt_get_text_data(fi, data_pos, clean_line)
        text_dict[identify_tag1] = text1
        line_pos = fi.tell()

        identify_tag2, data_pos = txt_get_tag(fi)  # expect vn
        if identify_tag1 == identify_tag2:
            fi.seek(line_pos)
            print(U'[ERROR]: Duplicate tag in line: {}'.format(fi.readline()))
            raise ValueError

        if identify_tag2 not in rq_tag:
            fi.seek(line_pos)
            print(U'[ERROR]: Tag invalid: {}'.format(fi.readline()))
            raise ValueError

        text2 = txt_get_text_data(fi, data_pos, clean_line)
        text_dict[identify_tag2] = text2
        rows.append([line_id, text_dict[TXT_JP], text_dict[TXT_VN]])

    return rows
