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

Current page keeps the `hub-v1` desktop Hero and uses the reviewed Tour artwork
from Mosaic commit `54b214f`: page 1 for membership and the mobile hero,
page 2 for attention, page 3 for reviewing changes, and page 4 for overview.
They are deterministic fixture screenshots, not live agent evidence.

The layered page 3 and 4 images retain transparency; CSS supplies the blue
radial-gradient background. Each image has a lossless WebP derivative and a PNG
fallback. Feature images link to the full-size PNG for closer inspection.

There is no public DMG yet. The download CTA stays “安装包准备中” until a
GitHub Release asset exists and `releases/latest.json` can be filled.

Preview:

```sh
python3 -m http.server 4173 --directory .
```

GitHub Pages publishes `main` from the repository root.
