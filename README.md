# Mosaic homepage

Public marketing site for Mosaic. This repository is the source.

Live URL: https://anderson-hyl.github.io/mosaic-web/

Stills come from the app repo’s marketing snapshot suite. Record and export
there; this repo only receives reviewed derivatives.

```sh
# in the Mosaic app checkout
./Scripts/marketing-assets record
./Scripts/marketing-assets verify
./Scripts/marketing-assets export --web-root /Users/anderson/Developer/mosaic-web
```

Current page uses `hub-v1` Hero and Tour page 1 stills (circular Workspace Hub).
They are deterministic fixture screenshots, not live agent evidence.

There is no public DMG yet. The download CTA stays “安装包准备中” until a
GitHub Release asset exists and `releases/latest.json` can be filled.

Preview:

```sh
python3 -m http.server 4173 --directory .
```

GitHub Pages publishes `main` from the repository root.
