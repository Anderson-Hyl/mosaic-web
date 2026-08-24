# Mosaic homepage

Public marketing site for Mosaic. Source lives in the private app repo
(`site/`); this file ships with the published copy as well.

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
