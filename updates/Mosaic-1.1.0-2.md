# Mosaic 1.1.0 (2)

Mosaic is a native, local-first macOS workspace. Rooms, workspaces, and tiles
keep terminals, agents, diffs, notes, and other app windows on one canvas. A
waiting pill counts explicit asks. No account.

This is a preview build: it is Developer ID signed but not notarized. Mosaic
1.0.0 gets it through **Mosaic ▸ Check for Updates…**.

## New: Tasks

A Task ties one agent conversation to a review. Choose **Start Task…** from the
canvas menu, the ⌘N sheet, or a terminal or agent tile's settings menu.

- **Immersion.** **Enter Task** shows only the Task's session, with the Task
  header, **Back to Canvas**, review selection, and the waiting pill. Your
  canvas layout stays as it was, and the session keeps running.
- **Plannotator review.** When the agent submits a plan or other Markdown, the
  review opens as a tile beside the session. Your approval or feedback goes
  back to the same conversation. An approval covers only the exact text you
  reviewed.
- **Works with Pi, Codex, Grok, and Claude Code.** Prime Tasks are not
  available yet.

### Requirements for Tasks

- macOS 15 or later on Apple silicon
- Plannotator installed
- Node.js installed (it runs the review bridge)
- The agent's own CLI, already signed in
- Grok: trust the project folder in Grok first. While a Grok Task runs, Mosaic
  adds a marked section to `.grok/config.toml` in that folder and removes it
  when the Task's Grok exits.

## Also in this release

- Only one copy of Mosaic runs at a time. Opening it again brings the running
  copy forward.
- Selecting a room row collapses the room list.
- The Inspector can show a selected tile.
