@echo off
title Build Game.exe
where node >nul 2>nul || (echo Install Node.js LTS from nodejs.org first, then run this again. & pause & exit /b 1)
call npm install || (echo npm install failed & pause & exit /b 1)
call npm run dist || (echo Build failed & pause & exit /b 1)
copy /Y dist\Game.exe Game.exe >nul
echo DONE: Game.exe is ready (single file, copy it anywhere).
pause
