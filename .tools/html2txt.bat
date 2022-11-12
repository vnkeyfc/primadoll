@echo off

if exist ./py/venv/Lib/ (
	goto skip_install
)

echo Install require package...
py -2 -m pip install --prefix "./py/venv" -r "./py/requirements.txt"
if %ERRORLEVEL% NEQ 0 goto exit

:skip_install
set PYTHONPATH=./py/venv/Lib/site-packages

echo Extract text...
py -2 "./py/main.py" -h2t "../.contents/original" "./txt_dump" -f 1

:exit
pause