(async () => {
  const nodes = document.querySelectorAll("[data-download-count]");
  if (!nodes.length) return;

  try {
    const metaRes = await fetch("releases/latest.json", { cache: "no-cache" });
    if (!metaRes.ok) return;
    const meta = await metaRes.json();
    if (!meta?.version || !meta?.url) return;

    const releaseRes = await fetch(
      `https://api.github.com/repos/Anderson-Hyl/mosaic-web/releases/tags/v${meta.version}`,
      {
        headers: { Accept: "application/vnd.github+json" },
      }
    );
    if (!releaseRes.ok) return;
    const release = await releaseRes.json();

    const assetName = String(meta.url).split("/").pop();
    const asset = Array.isArray(release.assets)
      ? release.assets.find((item) => item.name === assetName)
      : null;
    if (!asset || typeof asset.download_count !== "number") return;

    const count = asset.download_count;
    const label =
      count === 1 ? "1 download" : `${count.toLocaleString("en-US")} downloads`;

    for (const node of nodes) {
      node.textContent = label;
      node.hidden = false;
    }
  } catch {}
})();
