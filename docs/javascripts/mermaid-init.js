/* Renders Mermaid diagrams after Material loads or updates page content. */
(function () {
  function isDarkScheme() {
    return document.body.getAttribute("data-md-color-scheme") === "slate";
  }

  function renderMermaid() {
    if (typeof mermaid === "undefined") {
      return;
    }

    var nodes = document.querySelectorAll(".mermaid");
    if (!nodes.length) {
      return;
    }

    mermaid.initialize({
      startOnLoad: false,
      theme: isDarkScheme() ? "dark" : "default",
      securityLevel: "loose",
    });

    try {
      mermaid.run({ nodes: nodes });
    } catch (e) {
      console.warn("Mermaid render:", e);
    }
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      renderMermaid();
    });
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderMermaid);
  } else {
    renderMermaid();
  }
})();
