# Mosaic 1.3.1 (5)

A terminal can now leave the canvas for its own window, and agents hear back
from every review they open.

This is a preview build: it is Developer ID signed but not notarized. Earlier
versions get it through **Mosaic ▸ Check for Updates…**.

## New: open a terminal in its own window

Click the new window button on a terminal or agent tile, choose **Open in
New Window** from its menu, or press **⌥⌘N**. The terminal moves into a
window you can put anywhere, on any display. The process keeps running.

- The tile keeps its place on the canvas and shows a placeholder. Click it
  to bring the window forward.
- Close the window, or press ⌥⌘N in it, to put the terminal back on the
  canvas. Closing the window never closes the tile.
- The pin in the window's title bar keeps it above other windows. It is off
  by default.
- The window stays open when you switch rooms. The waiting pill still counts
  it, and jumping to it, maximizing it, its ⌘ digit and Jump to… all bring
  the window forward.
- Locking Mosaic hides these windows until you unlock.
- Agents can do the same with the new `mosaic_pop_out_tile` tool. A window
  an agent opens does not take your keyboard.
- Windows are not saved: after a restart every terminal is back on the
  canvas. Tiles that own a Task stay on the canvas.

## Fixes

- Agents now hear back from a Plannotator review they started in the
  background. 1.3.0 missed those, which is how most agents run them. This
  works in terminals opened after updating.
- Mosaic could crash when a Rain, Fire or White Noise tile started playing
  sound.
- Clicking the Dock icon brings back a main window closed to the menu bar,
  even when a terminal window is open.
- Deleting an agent tile through MCP now also ends its process.

### Requirements

- macOS 15 or later on Apple silicon
