# Mosaic homepage

Public marketing site for Mosaic. Source lives in the private app repo
(`site/`); this file ships with the published copy as well.

Stills of the app come from `HomepageSnapshotTests` (SnapshotTesting).
Record with `SNAPSHOT_TESTING_RECORD=all`, then copy the PNGs:

```sh
SNAP=MosaicPackage/Tests/MosaicCanvasTests/__Snapshots__/HomepageSnapshotTests
cp "$SNAP/attentionPill.attention-pill.png" site/assets/attention-pill.png
cp "$SNAP/noteTile.tile-note.png" site/assets/tile-note.png
cp "$SNAP/glanceWaiting.glance-waiting.png" site/assets/glance-waiting.png
cp "$SNAP/glanceFailed.glance-failed.png" site/assets/glance-failed.png
cp "$SNAP/lobbyQuickStart.lobby.png" site/assets/lobby.png
cp "$SNAP/canvasStrands.canvas-strands.png" site/assets/canvas-strands.png
cp "$SNAP/gitTile.tile-git.png" site/assets/tile-git.png
cp "$SNAP/terminalTile.tile-terminal.png" site/assets/tile-terminal.png
cp "$SNAP/workspaceMaximized.workspace-maximized.png" site/assets/workspace-maximized.png
cp "$SNAP/tileMaximized.tile-maximized.png" site/assets/tile-maximized.png
cp "$SNAP/canvasOverview.canvas-overview.png" site/assets/canvas-overview.png
```

GitHub Pages cannot publish from the private Mosaic repository on a Free
plan. The site is therefore a separate public repository (`mosaic-web`)
that contains only these files.

```
site/   →  Scripts/publish-site  →  mosaic-web (public)  →  GitHub Pages
```

Preview locally from the Mosaic repo:

```sh
python3 -m http.server 4173 --directory site
```

Publish (creates `../mosaic-web` if needed, copies, commits):

```sh
Scripts/publish-site
```

First time on a machine with `gh` authenticated:

```sh
Scripts/publish-site create
```

That makes `Anderson-Hyl/mosaic-web` public and turns on Pages from `main`.
The live URL is `https://anderson-hyl.github.io/mosaic-web/` until a custom
domain is attached.
