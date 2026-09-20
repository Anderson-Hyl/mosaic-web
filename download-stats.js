(async () => {
  const nodes = document.querySelectorAll("[data-download-count]");
  if (!nodes.length) return;

  try {
    const metaRes = await fetch("releases/latest.json", { cache: "no-cache" });
    if (!metaRes.ok) return;
    const meta = await metaRes.json();
    const count = meta?.downloadCount;
    if (typeof count !== "number" || count < 0 || !Number.isFinite(count)) return;

    const label =
      count === 1 ? "1 download" : `${count.toLocaleString("en-US")} downloads`;

    for (const node of nodes) {
      node.textContent = label;
      node.hidden = false;
    }
  } catch {}
})();
