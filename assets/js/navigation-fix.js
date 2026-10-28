/* PrepSphere navigation + layout compatibility layer
   Keeps existing page content intact while making navigation consistent. */
(function () {
  "use strict";

  const PAGE = {
    "home": "home.html",
    "study books": "study-books.html",
    "books": "study-books.html",
    "analysis": "analysis.html",
    "notes": "notes.html",
    "previous year questions": "PYQ.html",
    "pyq": "PYQ.html",
    "mock test": "mock-test.html",
    "mock tests": "mock-test.html",
    "mock": "mock-test.html",
    "wishlist": "wishlist.html",
    "history": "history.html",
    "achievements": "achievement.html",
    "achievement": "achievement.html",
    "downloads": "section.html?s=downloads",
    "settings": "section.html?s=settings",
    "help": "section.html?s=help",
    "premium": "section.html?s=premium",
    "ai study assistant": "section.html?s=ai",
    "my profile": "section.html?s=settings",
    "my target": "section.html?s=settings",
    "subscription": "section.html?s=premium",
    "purchase / premium": "section.html?s=premium"
  };

  function key(text) {
    return (text || "").replace(/^[^A-Za-z0-9]+/, "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function currentPage() {
    return (location.pathname.split("/").pop() || "home.html").toLowerCase();
  }

  function handleBackClick() {
    if (window.history.length > 1 && document.referrer && !document.referrer.endsWith(location.pathname)) {
      window.history.back();
    } else {
      window.location.href = "home.html";
    }
  }

  function normalizeLinks() {
    const cur = currentPage();
    document.querySelectorAll("aside a, .nav a, nav.bn a, nav.nav-m a, nav.mnav a").forEach(function (a) {
      const label = key(a.textContent);
      if (PAGE[label]) {
        a.setAttribute("href", PAGE[label]);
      }
      const full = (a.getAttribute("href") || "").toLowerCase();
      const href = full.split("?")[0];
      const sameQuery = href !== "section.html" || full === ("section.html" + location.search.toLowerCase());
      if (href && href === cur && sameQuery) {
        a.classList.add("on");
        a.setAttribute("aria-current", "page");
      }
    });

    // Fix legacy view links
    document.querySelectorAll('a[href*="view.html"], a[href*="View.html"], a[href*="book-view.html"]').forEach(function (a) {
      const h = a.getAttribute("href") || "";
      if (/^(?:book-)?view\.html/i.test(h.split("?")[0])) {
        a.setAttribute("href", "View.html" + (h.includes("?") ? h.slice(h.indexOf("?")) : ""));
      }
    });
  }

  // Back buttons exist only on secondary pages (section.html, View.html).
  // Primary pages (home, books, analysis, ...) no longer get one.
  function setupBackButton() {
    const b = document.getElementById("psBack") || document.getElementById("backBtn") || document.getElementById("back");
    if (b && !b.hasAttribute("data-tab-back") && /^(section|view)\.html$/.test(currentPage())) {
      b.onclick = handleBackClick;
    }
  }

  // Back button for tabs inside a primary page: appears only while a
  // secondary tab is open and returns to the page's main (first) tab.
  const TAB_STRIPS = {
    "pyq.html": ["views"],
    "notes.html": ["views", "tabs"],
    "wishlist.html": ["tabs"],
    "study-books.html": ["tabs"],
    "achievement.html": ["tabs"]
  };

  function setupTabBack() {
    const ids = TAB_STRIPS[currentPage()];
    if (!ids) return;
    const strips = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    if (!strips.length) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "psTabBack";
    btn.className = "back-btn ps-hide";
    btn.setAttribute("data-tab-back", "1");
    btn.setAttribute("aria-label", "Back to main page");
    btn.textContent = "\u2190 Back";
    btn.style.marginBottom = "10px";
    strips[0].parentNode.insertBefore(btn, strips[0]);

    function activeOf(strip) {
      const bs = Array.prototype.slice.call(strip.querySelectorAll("button"));
      const on = bs.filter(function (x) {
        return x.classList.contains("on") || x.getAttribute("aria-pressed") === "true" || x.getAttribute("aria-selected") === "true";
      })[0];
      return { first: bs[0], on: on };
    }
    function isSecondary(strip) {
      if (getComputedStyle(strip).display === "none") return false;
      const a = activeOf(strip);
      return !!(a.on && a.first && a.on !== a.first);
    }
    let busy = false;
    function refresh() {
      if (busy) return;
      busy = true;
      btn.classList.toggle("ps-hide", !strips.some(isSecondary));
      busy = false;
    }
    btn.addEventListener("click", function () {
      strips.forEach(function (strip) {
        const a = activeOf(strip);
        if (a.first && a.on && a.on !== a.first) a.first.click();
      });
      refresh();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    strips.forEach(function (strip) {
      new MutationObserver(refresh).observe(strip, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "aria-pressed", "aria-selected", "style"] });
    });
    refresh();
  }

  function fixDashboardLayout() {
    if (document.getElementById("ps-nav-layout-fix")) return;
    const css = document.createElement("style");
    css.id = "ps-nav-layout-fix";
    css.textContent = `
      /* Consistent dashboard/sidebar geometry across all PrepSphere pages */
      html {
        scrollbar-gutter: stable !important;
      }
      .app {
        display: grid !important;
        grid-template-columns: 232px minmax(0, 1fr) !important;
        min-height: 100vh !important;
      }
      .app > aside,
      .app > .side,
      aside.sb,
      aside.side,
      aside,
      .side {
        width: 232px !important;
        min-width: 232px !important;
        max-width: 232px !important;
        padding: 18px 12px !important;
        position: sticky !important;
        top: 0 !important;
        height: 100vh !important;
        box-sizing: border-box !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 2px !important;
        overflow-y: auto !important;
        flex-shrink: 0 !important;
        font-family: 'Manrope', system-ui, sans-serif !important;
      }
      .logo {
        display: flex !important;
        gap: 10px !important;
        align-items: center !important;
        font-family: 'Manrope', system-ui, sans-serif !important;
        font-size: 18px !important;
        font-weight: 800 !important;
        line-height: 1 !important;
        padding: 4px 10px 16px !important;
        box-sizing: border-box !important;
      }
      .logo i {
        width: 30px !important;
        height: 30px !important;
        border-radius: 50% !important;
        background: conic-gradient(from 200deg, var(--pri, #00BFA5), var(--pri2, #00897B), var(--line, #B2EBF2), var(--pri, #00BFA5)) !important;
        display: block !important;
        flex-shrink: 0 !important;
      }
      .nav a, aside a {
        display: flex !important;
        gap: 10px !important;
        align-items: center !important;
        padding: 9px 12px !important;
        border-radius: 10px !important;
        text-decoration: none !important;
        font-family: 'Manrope', system-ui, sans-serif !important;
        font-weight: 600 !important;
        font-size: 14px !important;
        line-height: 1.4 !important;
        margin-bottom: 2px !important;
        transition: all .15s ease !important;
        box-sizing: border-box !important;
      }
      .nav a:hover, aside a:hover {
        background: var(--soft, #E0F7FA) !important;
        color: var(--ink, #12343B) !important;
      }
      .nav a.on, aside a.on {
        background: var(--pri, #00BFA5) !important;
        color: #fff !important;
        font-weight: 700 !important;
      }
      main {
        padding: 0 24px 40px !important;
        min-width: 0 !important;
        box-sizing: border-box !important;
      }
      .top {
        display: flex !important;
        gap: 14px !important;
        align-items: center !important;
        padding: 14px 0 !important;
        position: sticky !important;
        top: env(safe-area-inset-top, 0px) !important;
        z-index: 5 !important;
        box-sizing: border-box !important;
      }
      .back-btn, #psBack, #backBtn {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        padding: 8px 14px !important;
        border-radius: 10px !important;
        border: 1px solid var(--line, #B2EBF2) !important;
        background: var(--card, #FFFFFF) !important;
        color: var(--pri2, #00897B) !important;
        font: 700 13px/1.2 'Manrope', system-ui, sans-serif !important;
        cursor: pointer !important;
        text-decoration: none !important;
        white-space: nowrap !important;
        flex-shrink: 0 !important;
        transition: all .15s ease !important;
        box-shadow: 0 1px 3px rgba(18,52,59,.04) !important;
      }
      .back-btn:hover, #psBack:hover, #backBtn:hover {
        background: var(--soft, #E0F7FA) !important;
        border-color: var(--pri, #00BFA5) !important;
        color: var(--ink, #12343B) !important;
      }
      .ps-hide { display: none !important; }
      .back-btn.ps-hide { display: none !important; }
      @media(max-width:900px) {
        .app {
          grid-template-columns: 1fr !important;
          display: block !important;
        }
        aside, .side {
          display: none !important;
        }
        main {
          padding: 0 14px 90px !important;
        }
      }
    `;
    document.head.appendChild(css);
  }

  // Shared theme (single source of truth: localStorage "ps_theme"; default Light).
  window.PSTheme = {
    get: function () { try { return localStorage.getItem("ps_theme") === "dark" ? "dark" : "light"; } catch (e) { return "light"; } },
    apply: function () {
      const t = window.PSTheme.get();
      if (document.documentElement.dataset.theme !== t) document.documentElement.dataset.theme = t;
      document.dispatchEvent(new CustomEvent("ps-theme", { detail: t }));
    },
    set: function (t) {
      t = t === "dark" ? "dark" : "light";
      try { localStorage.setItem("ps_theme", t); } catch (e) {}
      document.documentElement.dataset.theme = t;
      document.dispatchEvent(new CustomEvent("ps-theme", { detail: t }));
    }
  };
  window.addEventListener("storage", function (e) { if (e.key === "ps_theme" || e.key === null) window.PSTheme.apply(); });
  window.addEventListener("pageshow", function () { window.PSTheme.apply(); });

  function init() {
    window.PSTheme.apply();
    fixDashboardLayout();
    normalizeLinks();
    setupBackButton();
    setupTabBack();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
