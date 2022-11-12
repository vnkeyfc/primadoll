@echo off

if exist ./py/Lib/ (
	goto skip_install
)

echo Install require package...
py -2 -m pip install --prefix "./py" -r "./py/requirements.txt"
if %ERRORLEVEL% NEQ 0 goto exit

:skip_install
set PYTHONPATH=./py/Lib/site-packages

echo Extract text...
py -2 "./py/main.py" -h2t "../.contents/original" "./xlsx_dump" -f 2

:exit
pause