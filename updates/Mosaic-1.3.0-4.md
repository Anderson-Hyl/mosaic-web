# Mosaic 1.3.0 (4)

Turn a conversation you already have into a Task, and agents now hear back
when you finish a review they opened.

This is a preview build: it is Developer ID signed but not notarized. Earlier
versions get it through **Mosaic ▸ Check for Updates…**.

## New: Continue in Task

Right-click a terminal or agent tile running Grok, Codex, Claude Code, Kiro
or Pi and choose **Continue in Task**. There is no form to fill in.

- Mosaic restarts the agent on the same conversation so Task reviews can
  reach it, then opens Task. The conversation is kept. Anything the agent is
  doing at that moment is stopped, so Mosaic asks first.
- It works only when Mosaic can tell exactly which conversation is running:
  for example an agent started from an Agent tile, `grok` or `kiro-cli` typed
  in a shell, or an agent started with an explicit session id. Otherwise the
  item does not appear. **Start Task…** is unchanged and still opens the form.
- If anything fails along the way, the Task is removed and the conversation
  resumes as it was.

## New: agents hear back from reviews

When an agent opens a Plannotator review itself, outside a Task, Mosaic now
types a short note into its prompt once you approve or send feedback. You no
longer have to tell the agent the review is done. The note waits until the
agent is idle and is never typed into a plain shell.

## Fixes

- Mosaic could fail to start Task reviews ("not installed") after a process
  started in a terminal tile outlived the app. Terminal processes no longer
  inherit Mosaic's sockets.
- Reconnect Task picks up where the conversation stopped, as before.

### Requirements

- macOS 15 or later on Apple silicon
