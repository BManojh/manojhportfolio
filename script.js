/* ============================================================
   Manojh B — portfolio interactions
   Plain JavaScript. No frameworks, no dependencies.
   1. Dark / light theme toggle (remembers your choice)
   2. Mobile navigation toggle
   3. Project filter buttons
   4. Active nav-link highlighting while scrolling
   5. Footer year
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. Theme toggle ---------- */
  var root = document.documentElement;
  var themeToggle = document.querySelector(".theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem("portfolio-theme");
  } catch (err) {
    /* localStorage unavailable (private mode) — fall through */
  }

  if (savedTheme === "light" || savedTheme === "dark") {
    applyTheme(savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }

  themeToggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch (err) {
      /* non-fatal: theme just won't persist */
    }
  });

  /* ---------- 2. Mobile nav toggle ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", function () {
    var open = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close the mobile menu after choosing a section.
  navMenu.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close the menu when clicking outside the header.
  document.addEventListener("click", function (event) {
    if (
      navMenu.classList.contains("is-open") &&
      !event.target.closest(".site-header")
    ) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- 3. Project filter ---------- */
  var filterButtons = Array.prototype.slice.call(
    document.querySelectorAll(".filter-btn")
  );
  var projectCards = Array.prototype.slice.call(
    document.querySelectorAll(".project-card")
  );

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");

      filterButtons.forEach(function (other) {
        var active = other === button;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-pressed", active ? "true" : "false");
      });

      projectCards.forEach(function (card) {
        var show =
          filter === "all" ||
          card.getAttribute("data-category") === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- 4. Active nav link on scroll ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = "#" + entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === id);
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- 5. Footer year ---------- */
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
