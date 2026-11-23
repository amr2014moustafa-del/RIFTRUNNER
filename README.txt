RIFTRUNNER - Offline Windows Game

BUILD
- The GitHub Actions workflow builds a portable Windows executable automatically
  whenever changes are pushed to the main branch.
- To start a build manually, open the repository's Actions tab, select
  "Build Windows Game", then choose "Run workflow".

DOWNLOAD
- Wait for the workflow to finish successfully.
- Open the completed run and download the "Game-exe" artifact.
- Extract the downloaded ZIP. It contains Game.exe.

PLAY
- Run Game.exe on Windows.
- The game is designed to work offline.
- Progress is saved locally by the game.
- Press F11 for fullscreen. Use the in-game pause control or the configured
  pause key to pause.

NOTE
- Windows may display a SmartScreen warning because this is an unsigned
  independently built application.
