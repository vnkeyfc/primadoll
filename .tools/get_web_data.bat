@echo off

if exist ./scraper/node_modules/ (
	goto skip_install
)

echo Install require package...
cd scraper
call npm install
if %ERRORLEVEL% NEQ 0 goto exit

cd ..

:skip_install
echo ============================================
echo Start scraper
node ./scraper/index.js "https://key.visualarts.gr.jp/primadoll/novel.html" web_data "https://key.visualarts.gr.jp/primadoll"

:exit
pause