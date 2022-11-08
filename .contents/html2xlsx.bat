@echo off

if exist ../.tools/py/Lib/ (
	goto skip_install
)

echo Install require package...
py -2 -m pip install --prefix "../.tools/py" -r "../.tools/py/requirements.txt"

:skip_install
set PYTHONPATH=../.tools/py/Lib/site-packages

echo Extract text...
py -2 "../.tools/py/main.py" -h2t "./original" "./xlsx_dump" -f 2
pause