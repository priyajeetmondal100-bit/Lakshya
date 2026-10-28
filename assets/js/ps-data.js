/* PrepSphere shared data: History + Downloads.
   Everything is kept in localStorage so it works offline and can later be swapped for a backend.
     ps_history   -> { books:[], notes:[], tests:[] }   (what the student opened / began)
     ps_downloads -> [ {id, kind, title, sub, ts, text} ]  (files saved INSIDE PrepSphere; nothing is saved to the device)
   Pages use:  PSData.logBook / setBookPage / logNote / logTest / finishTest
               PSData.addDownload / downloads / removeDownload / bookText / testText                    */
(function () {
  var K_H = "ps_history", K_D = "ps_downloads", MAX = 60;

  function rd(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function wr(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }

  function hist() {
    var h = rd(K_H, {}) || {};
    return { books: h.books || [], notes: h.notes || [], tests: h.tests || [] };
  }
  function saveHist(h) { return wr(K_H, h); }

  /* ---------- History ---------- */
  function upsert(list, item) {
    var i = list.findIndex(function (x) { return x.id === item.id; });
    var old = i > -1 ? list.splice(i, 1)[0] : null;
    var merged = Object.assign({}, old || {}, item);
    list.unshift(merged);
    if (list.length > MAX) list.length = MAX;
    return merged;
  }

  /* b: {id,title,author,subject,total,q}  - called whenever a book is opened */
  function logBook(b) {
    var h = hist(), old = h.books.find(function (x) { return x.id === b.id; }) || {};
    var total = +b.total || old.total || 0;
    var rec = upsert(h.books, {
      id: b.id, title: b.title, author: b.author || "", subject: b.subject || "",
      total: total, q: b.q || old.q || "", ts: Date.now(),
      read: old.read || 0, page: old.page || 0
    });
    saveHist(h);
    return rec;
  }
  /* remember the page the student is on; "read" is the furthest page reached */
  function setBookPage(id, page) {
    var h = hist(), b = h.books.find(function (x) { return x.id === id; });
    if (!b) return null;
    page = Math.max(1, Math.min(b.total || page, page));
    b.page = page; b.read = Math.max(b.read || 0, page); b.ts = Date.now();
    saveHist(h);
    return b;
  }
  /* n: {id,title,folder,subj,ch} - called whenever a note is opened to read */
  function logNote(n) {
    var h = hist(), old = h.notes.find(function (x) { return x.id === n.id; }) || {};
    upsert(h.notes, {
      id: n.id, title: n.title, folder: n.folder || "", subj: n.subj || "", ch: n.ch || "",
      ts: Date.now(), count: (old.count || 0) + 1
    });
    saveHist(h);
  }
  /* t: {code,title,exam,type,n,mins} - called when a test begins; returns the attempt id */
  function logTest(t) {
    var h = hist(), id = "a" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    h.tests.unshift({ id: id, code: t.code, title: t.title, exam: t.exam || "", type: t.type || "", n: t.n || 0, mins: t.mins || 0, ts: Date.now(), rid: "" });
    if (h.tests.length > MAX) h.tests.length = MAX;
    saveHist(h);
    return id;
  }
  /* link a begun test with its saved result (id in ps_mock_history) */
  function finishTest(attemptId, resultId) {
    var h = hist(), a = h.tests.find(function (x) { return x.id === attemptId; });
    if (a) { a.rid = resultId; saveHist(h); }
  }
  function remove(kind, id) {
    var h = hist(); h[kind] = h[kind].filter(function (x) { return x.id !== id; }); saveHist(h);
  }
  function clear(kind) { var h = hist(); h[kind] = []; saveHist(h); }

  /* ---------- Downloads (stored inside the app, available offline) ---------- */
  function downloads() { return rd(K_D, []); }
  /* d: {id, kind:'book'|'test'|'note'|'other', title, sub, text}. Returns true when saved. */
  function addDownload(d) {
    var list = downloads().filter(function (x) { return !(x.kind === d.kind && x.id === d.id); });
    list.unshift({ id: d.id, kind: d.kind, title: d.title, sub: d.sub || "", text: d.text || "", ts: Date.now() });
    if (!wr(K_D, list)) return false;
    return true;
  }
  function removeDownload(kind, id) {
    wr(K_D, downloads().filter(function (x) { return !(x.kind === kind && x.id === id); }));
  }
  function hasDownload(kind, id) { return downloads().some(function (x) { return x.kind === kind && x.id === id; }); }

  /* ---------- Offline file contents ---------- */
  var CH = ["Introduction", "Core Concepts", "Worked Examples", "Practice Problems", "Revision & Summary"];
  function chapters(total) {
    var base = Math.floor(total / 5), out = [], start = 1;
    for (var i = 0; i < 5; i++) {
      var n = i === 4 ? total - base * 4 : base;
      out.push({ n: i + 1, title: CH[i], pages: n, start: start });
      start += n;
    }
    return out;
  }
  function bookText(b) {
    var ch = chapters(b.total || 0);
    return b.title + "\nby " + (b.author || "PrepSphere") + (b.subject ? "  ·  " + b.subject : "") + "\n" + (b.total || 0) + " pages\n\n" +
      "CONTENTS\n" + ch.map(function (c) { return "Chapter " + c.n + " — " + c.title + " (pages " + c.start + "–" + (c.start + c.pages - 1) + ")"; }).join("\n") +
      "\n\n(Demo copy stored inside PrepSphere. Connect your real book file here.)\n";
  }
  function testText(r) {
    var L = [r.title + "  (" + r.code + ")", r.exam + "  ·  " + r.type + "  ·  " + new Date(r.ts).toLocaleString("en-IN"), "",
      "Score: " + r.score + " / " + r.max, "Accuracy: " + r.acc + "%", "Correct: " + r.c + "   Wrong: " + r.w + "   Skipped: " + r.k,
      "Percentile (est.): " + r.pct, "", "BY SUBJECT"];
    Object.keys(r.subs || {}).forEach(function (k) { L.push(k + ": " + r.subs[k][0] + "/" + r.subs[k][1]); });
    L.push("", "NEEDS REVISION", (r.weak || []).join(", ") || "None", "", "ANSWER REVIEW");
    (r.rev || []).forEach(function (q, i) {
      L.push("Q" + (i + 1) + ". " + q[0], "  Your answer: " + (q[2] < 0 ? "Skipped" : q[1][q[2]]), "  Correct answer: " + q[1][q[3]], "  " + q[4]);
    });
    return L.join("\n") + "\n";
  }

  /* small message for pages that have no toast of their own */
  function notify(msg) {
    var t = document.createElement("div");
    t.setAttribute("role", "status");
    t.textContent = msg;
    t.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:99;padding:10px 18px;border-radius:99px;font:700 13px system-ui,sans-serif;background:var(--ink,var(--navy,#12343B));color:var(--bg,var(--white,#fff))";
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2200);
  }

  window.PSData = {
    notify: notify,
    hist: hist, logBook: logBook, setBookPage: setBookPage, logNote: logNote, logTest: logTest, finishTest: finishTest,
    removeHistory: remove, clearHistory: clear,
    downloads: downloads, addDownload: addDownload, removeDownload: removeDownload, hasDownload: hasDownload,
    chapters: chapters, bookText: bookText, testText: testText
  };
})();
