(() => {
  if (
    location.hostname !== "localhost" &&
    location.hostname !== "127.0.0.1" &&
    location.hostname !== "[::1]"
  ) {
    return;
  }

  const interval = Number(document.currentScript?.dataset.interval || 1000);
  const debug = Boolean(document.currentScript?.dataset.debug || false);

  let watching = new Set();
  watch(location.href);

  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      watch(entry.name);
    }
  }).observe({ type: "resource", buffered: true });

  function watch(urlString) {
    if (!urlString) return;
    const url = new URL(urlString);
    if (url.origin !== location.origin) return;

    if (watching.has(url.pathname)) return;
    watching.add(url.pathname);

    if (debug) {
      console.log("[simple-live-reload] watching", url.pathname);
    }

    let lastModified, etag;

    async function check() {
      const res = await fetch(url, { method: "head" });
      const newLastModified = res.headers.get("Last-Modified");
      const newETag = res.headers.get("ETag");

      if (
        (lastModified != null || etag != null) &&
        (lastModified != newLastModified || etag != newETag)
      ) {
        location.reload();
      }

      lastModified = newLastModified;
      etag = newETag;
    }

    setInterval(check, interval);
  }
})();
