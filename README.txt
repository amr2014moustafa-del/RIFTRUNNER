RIFTRUNNER - offline Windows 10 game

1) UPLOAD TO GITHUB
   a. Unzip this ZIP on your computer.
   b. Go to github.com, sign in (free), click "New repository", give it any name, click "Create repository".
   c. Click "uploading an existing file", then drag EVERYTHING from the unzipped folder into the page
      (include the ".github" folder; on a Mac press Cmd+Shift+. in Finder to show it).
   d. Click "Commit changes".

2) START THE BUILD
   The build starts automatically after you commit. To start it by hand:
   open the "Actions" tab > "Build Windows Game.exe" > "Run workflow" > "Run workflow".

3) DOWNLOAD Game.exe
   Wait ~3-6 minutes for a green check mark. Open the finished run, scroll to "Artifacts",
   click "Game-exe". GitHub downloads a .zip; extract it - it contains one file: Game.exe.
   If the run shows a red X, copy the error text from the failed step and send it to Claude.

4) PLAY OFFLINE ON WINDOWS 10
   Copy Game.exe anywhere and double-click it. No internet, no browser, nothing to install.
   Progress saves automatically on your computer. F11 = fullscreen. Esc or P = pause.
   (Windows SmartScreen may warn about an unsigned app: click "More info" > "Run anyway".)
