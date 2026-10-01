// HandyChecker – zwei progressive Verbesserungen.
//
// 1) Selbstcheck (SELF-01): Die Reflexion erscheint rein per CSS
//    (:has(input:checked)); dieses Skript ergänzt nur die
//    Screenreader-Ankündigung (aria-live) und einen Mini-Fallback für
//    Browser ohne :has().
// 2) "Gesehene Themen": Auf einer Themenseite wird gemerkt, dass sie
//    angeschaut wurde; bereits gesehene Themen verschwinden aus der
//    "Womit willst du weitermachen?"-Liste.
//
// Gespeichert wird NUR lokal auf dem Gerät (localStorage) und ausschließlich
// eine Liste von Themennamen – nichts wird gesendet, nichts über die Person.
(function () {
  var SEEN_KEY = "handychecker.seen";

  function readSeen() {
    try {
      var list = JSON.parse(window.localStorage.getItem(SEEN_KEY) || "[]");
      return Array.isArray(list) ? list : [];
    } catch (e) {
      return [];
    }
  }

  function writeSeen(list) {
    try {
      window.localStorage.setItem(SEEN_KEY, JSON.stringify(list));
    } catch (e) {
      /* privater Modus o. Ä. – dann eben ohne Erinnerung */
    }
  }

  // --- gesehene Themen -------------------------------------------------
  var topicEl = document.querySelector("[data-topic]");
  if (topicEl) {
    var slug = topicEl.getAttribute("data-topic");
    var seen = readSeen();
    if (slug && seen.indexOf(slug) === -1) {
      seen.push(slug);
      writeSeen(seen);
    }

    var cards = document.querySelectorAll(".next .card[data-slug]");
    var remaining = 0;
    cards.forEach(function (card) {
      if (seen.indexOf(card.getAttribute("data-slug")) !== -1) {
        var li = card.closest("li");
        if (li) li.style.display = "none";
      } else {
        remaining++;
      }
    });
    if (cards.length && remaining === 0) {
      var empty = document.querySelector(".next-empty");
      if (empty) empty.hidden = false;
    }
  }

  document.querySelectorAll("[data-reset]").forEach(function (el) {
    el.addEventListener("click", function () {
      writeSeen([]);
    });
  });

  // --- Selbstcheck -----------------------------------------------------
  var groups = document.querySelectorAll(".selfcheck__group");
  if (!groups.length) return;

  var hasHas =
    typeof CSS !== "undefined" &&
    typeof CSS.supports === "function" &&
    CSS.supports("selector(:has(*))");

  groups.forEach(function (group) {
    var section = group.closest(".selfcheck");
    var live = section ? section.querySelector(".selfcheck__live") : null;

    group.addEventListener("change", function (e) {
      var input = e.target;
      var option = input.closest(".selfcheck__option");
      if (!option) return;
      var label = option.querySelector("label");
      var reflection = option.querySelector(".selfcheck__reflection");

      // Fallback für Engines ohne :has(): andere Antworten ausblenden,
      // die gewählte Antwort samt Reflexion stehen lassen.
      if (!hasHas) {
        group.querySelectorAll(".selfcheck__option").forEach(function (o) {
          o.style.display = o === option ? "" : "none";
        });
        if (reflection) reflection.style.display = "block";
      }

      if (live) {
        var text = label ? label.textContent.trim() : "";
        if (reflection) text += " – " + reflection.textContent.trim();
        live.textContent = text; // announced; nothing stored, nothing sent
      }
    });
  });
})();
