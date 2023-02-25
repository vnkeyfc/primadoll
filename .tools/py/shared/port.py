import sys

IS_PY3 = False
if sys.version_info.major == 3:
    unicode = str
    IS_PY3 = True