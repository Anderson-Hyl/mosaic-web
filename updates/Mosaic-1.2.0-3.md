# Mosaic 1.2.0 (3)

More agents can own a Task, and you can ask the agent about a plan right on
the review page.

This is a preview build: it is Developer ID signed but not notarized. Mosaic
1.0.0 and 1.1.0 get it through **Mosaic ▸ Check for Updates…**.

## New: more agents for Tasks

- **Kiro CLI.** Start a Task with **New Kiro conversation**. On the first
  launch Mosaic adds a `mosaic` server to `~/.kiro/settings/mcp.json` and a
  rule allowing `mosaic/*` to `~/.kiro/settings/permissions.yaml`. Both files
  are backed up before the first write, and nothing else in them changes.
- **Any MCP-capable CLI.** Choose **New conversation in another CLI** and
  enter the command that starts it. Review works; asking during review and
  session recovery are not available in this mode.

## New: ask during review

Use **Ask AI** (“Ask this session”) on the review page to ask about the plan
you are reviewing.

- Claude Code, Codex and Grok: a read-only fork of the session answers. The
  running session is not interrupted.
- Kiro CLI: a read-only copy of the session answers and is deleted
  afterwards.
- After you send feedback, questions on the revised plan remember the earlier
  round’s questions, feedback and the diff between versions. A new document
  starts fresh.
- Questions and answers last only while Mosaic is running.

## Also in this release

- Codex, Grok, Claude Code and Kiro reviews now open through Plannotator’s
  hook entry, as Pi’s already did.

### Requirements for Tasks

- macOS 15 or later on Apple silicon
- Plannotator installed
- Node.js installed (it runs the review bridge)
- The agent’s own CLI, already signed in
- Grok: trust the project folder in Grok first.
