/*
 * Moteur du portfolio : rendu, navigation, thème et langue.
 * Le contenu se modifie dans assets/js/content.js.
 */
(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) =>
    Array.from(scope.querySelectorAll(selector));

  const P = PORTFOLIO;
  const placeholderImage = "assets/img/placeholder.svg";
  const linkedInIcon = `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" focusable="false">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.34c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.87V24h-5V8z" />
      </svg>
    </span>
  `;

  /* Textes d'interface (hors contenu). */
  const i18n = {
    fr: {
      home: "Accueil",
      projects: "Projets",
      back: "← Retour",
      ctaMore: "En savoir plus →",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      themeLabel: "Basculer le thème",
      languageLabel: "Langue",
      linkedInTitle: "Voir le profil LinkedIn",
      navigationLabel: "Principale",
      videoFallback: "Votre navigateur ne prend pas en charge la vidéo.",
      videoEmpty: "Ta vidéo de présentation ici",
    },
    en: {
      home: "Welcome",
      projects: "Projects",
      back: "← Back",
      ctaMore: "Learn more →",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      themeLabel: "Toggle theme",
      languageLabel: "Language",
      linkedInTitle: "View LinkedIn profile",
      navigationLabel: "Main navigation",
      videoFallback: "Your browser doesn’t support video.",
      videoEmpty: "Your pitch video here",
    },
  };

  const root = document.documentElement;
  const app = $("#app");
  const langSel = $("#langSel");
  const cvBtn = $("#cvBtn");
  const themeBtn = $("#themeBtn");
  const burger = $("#burger");
  const menu = $("#menu");
  const sectionIds = P.sections.map((section) => section.id);

  let spyObserver = null;
  let timelineObserver = null;
  let renderFrame = null;

  $("#year").textContent = new Date().getFullYear();
  $("#brand-home").textContent = P.name;

  // Menu : Accueil, Projets, puis une entrée par section de content.js.
  $("#menu-list").innerHTML = [
    `<li><a href="#home" id="nav-home"></a></li>`,
    `<li><a href="#/projects" id="nav-projects"></a></li>`,
    ...sectionIds.map(
      (id) => `<li><a href="#${id}" id="nav-${id}"></a></li>`,
    ),
  ].join("");

  // Le site reste utilisable si le navigateur bloque le stockage local.
  function readPreference(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // La préférence reste appliquée à la page courante.
    }
  }

  let currentLang = readPreference("lang");
  if (currentLang !== "fr" && currentLang !== "en") {
    currentLang = (navigator.language || "fr").toLowerCase().startsWith("fr")
      ? "fr"
      : "en";
  }

  root.dataset.theme = readPreference("theme") === "dark" ? "dark" : "light";

  function scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    const offset = ($("header.nav")?.offsetHeight || 0) + 6;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top,
      left: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  function setMenuOpen(open) {
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute(
      "aria-label",
      open ? i18n[currentLang].menuClose : i18n[currentLang].menuOpen,
    );
  }

  // Mise à jour commune à toutes les pages, y compris les projets.
  function updateInterface(lang) {
    const t = i18n[lang];

    $("#nav-home").textContent = t.home;
    $("#nav-projects").textContent = t.projects;
    P.sections.forEach((section) => {
      $("#nav-" + section.id).textContent = section[lang].nav;
    });

    root.lang = lang;
    langSel.value = lang;
    langSel.setAttribute("aria-label", t.languageLabel);
    themeBtn.setAttribute("aria-label", t.themeLabel);
    menu.setAttribute("aria-label", t.navigationLabel);
    cvBtn.textContent = P.cv[lang].label;
    cvBtn.href = P.cv[lang].href;
    $("#footer-text").textContent = P.footer[lang];

    $$(".linkedin-link").forEach((link) => {
      link.href = P.linkedin;
      link.title = t.linkedInTitle;
      link.setAttribute("aria-label", t.linkedInTitle);
    });
  }

  /* Génération des blocs HTML. */
  function timelineHTML(lang) {
    const { title, items } = P.timeline[lang];
    const entries = items
      .map(
        (item) => `
          <div class="tli">
            <strong>${item.title}</strong>
            <div class="small">${item.subtitle}</div>
          </div>
        `,
      )
      .join("");

    return `
      <section class="section">
        <div class="card fade timeline" id="timeline">
          <h2 class="h2">${title}</h2>
          <div class="tl">${entries}</div>
        </div>
      </section>
    `;
  }

  function projectsIntroHTML(lang) {
    const c = P.projectsIntro[lang];

    return `
      <section class="section">
        <div class="card fade">
          <h2 class="h2">${c.title}</h2>
          <p class="lead">${c.lead} <a href="#/projects">${c.link}</a>.</p>
        </div>
      </section>
    `;
  }

  function sectionHTML(section, lang) {
    const c = section[lang];
    const subcards = (c.subcards || [])
      .map(
        (sub) => `
          <div class="card subcard">
            <h3 class="h2">${sub.title}</h3>
            ${sub.body}
          </div>
        `,
      )
      .join("");

    return `
      <section id="${section.id}" class="section">
        <div class="card fade">
          <h2 class="h2">${c.title}</h2>
          ${c.body}
          ${subcards}
        </div>
      </section>
    `;
  }

  function pitchVideoHTML(lang) {
    const { src, poster } = P.pitchVideo;
    if (!src) {
      return `<div class="empty-slot">${i18n[lang].videoEmpty}</div>`;
    }

    return `
      <video class="pitch-video" controls preload="metadata"
             ${poster ? `poster="${poster}"` : ""}>
        <source src="${src}" type="video/mp4" />
        ${i18n[lang].videoFallback}
      </video>
    `;
  }

  function renderHomeHTML(lang) {
    const c = P.home[lang];

    return `
      <section id="home" class="section hero">
        <div class="grid cols-2">
          <div class="card fade">
            <span class="chip">${c.chip}</span>
            <h1>${P.name}</h1>
            <p class="lead">${c.intro}</p>
            <div class="grid cols-3 hero-actions">
              <a class="btn${lang === "fr" ? " primary" : ""}"
                 href="${P.cv.fr.href}" download>📄 ${P.cv.fr.label}</a>
              <a class="btn${lang === "en" ? " primary" : ""}"
                 href="${P.cv.en.href}" download>📄 ${P.cv.en.label}</a>
              <a class="btn linkedin linkedin-link" href="${P.linkedin}"
                 target="_blank" rel="noopener">${linkedInIcon} LinkedIn</a>
            </div>
          </div>
          <div class="card fade">
            <h2 class="h2">${c.pitchTitle}</h2>
            <p class="small">${c.pitchIntro}</p>
            ${pitchVideoHTML(lang)}
          </div>
        </div>
      </section>
      ${timelineHTML(lang)}
      ${projectsIntroHTML(lang)}
      ${P.sections.map((section) => sectionHTML(section, lang)).join("")}
    `;
  }

  function tagsHTML(tags) {
    if (!tags || tags.length === 0) return "";
    return `<ul class="tags">${tags
      .map((tag) => `<li class="chip">${tag}</li>`)
      .join("")}</ul>`;
  }

  function renderProjectsListHTML(lang) {
    const t = i18n[lang];
    const items = P.projects
      .map((project) => {
        const c = project[lang];
        const href = "#/project/" + project.slug;

        return `
          <article class="card project fade">
            <div class="grid cols-2 project-layout">
              <a class="thumb-link media-frame" href="${href}">
                <img class="thumb" src="${project.cover || placeholderImage}"
                     alt="${c.title}" loading="lazy" decoding="async" />
              </a>
              <div>
                <h2 class="project-title">${c.title}</h2>
                ${tagsHTML(project.tags)}
                <p class="lead project-summary">${c.summary}</p>
                <p><a class="btn" href="${href}">${t.ctaMore}</a></p>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    return `
      <section class="section">
        <div class="card">
          <h1 class="h2">${t.projects}</h1>
          <p class="small">${P.projectsIntro[lang].pageLead}</p>
        </div>
      </section>
      <section class="section project-list">${items}</section>
    `;
  }

  function renderProjectDetailHTML(project, lang) {
    const c = project[lang];
    const t = i18n[lang];

    return `
      <section class="section">
        <a href="#/projects" class="btn back-link">${t.back}</a>
        <div class="card">
          <div class="grid cols-2 project-detail-layout">
            <figure class="detail-media media-frame">
              <img src="${project.cover || placeholderImage}"
                   alt="${c.title}" decoding="async" />
            </figure>
            <div>
              <h1 class="h2">${c.title}</h1>
              ${tagsHTML(project.tags)}
              ${c.body}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* Navigation active et observateurs d'apparition. */
  function setActive(hash) {
    const section = (hash || "").replace(/^#/, "");
    let activeId = "nav-home";

    if (section.startsWith("/projects") || section.startsWith("/project/")) {
      activeId = "nav-projects";
    } else if (sectionIds.includes(section)) {
      activeId = "nav-" + section;
    }

    $$("#menu a").forEach((link) => {
      const active = link.id === activeId;
      link.classList.toggle("active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function clearObservers() {
    spyObserver?.disconnect();
    timelineObserver?.disconnect();
    spyObserver = null;
    timelineObserver = null;

    if (renderFrame !== null) {
      cancelAnimationFrame(renderFrame);
      renderFrame = null;
    }
  }

  function enableTimeline() {
    const timeline = $("#timeline");
    if (!timeline) return;

    if (!("IntersectionObserver" in window)) {
      timeline.classList.add("is-visible");
      return;
    }

    timelineObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          timeline.classList.add("is-visible");
          timelineObserver?.disconnect();
          timelineObserver = null;
        }
      },
      { threshold: 0.15 },
    );
    timelineObserver.observe(timeline);
  }

  function enableScrollSpy() {
    if (!("IntersectionObserver" in window)) return;

    const sections = ["home", ...sectionIds]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const headerHeight = $("header.nav")?.offsetHeight || 0;

    spyObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        threshold: 0,
        rootMargin: `-${headerHeight}px 0px -45% 0px`,
      },
    );
    sections.forEach((section) => spyObserver.observe(section));
  }

  /* Rendu et routage. */
  function route() {
    const hash = location.hash.slice(1);
    const lang = currentLang;
    const isProjectDetail = hash.startsWith("/project/");
    const isProjectsList = hash === "/projects";
    const isHome = !isProjectDetail && !isProjectsList;

    clearObservers();
    setMenuOpen(false);

    if (isProjectDetail) {
      const slug = hash.slice("/project/".length);
      const project = P.projects.find((item) => item.slug === slug);
      if (!project) {
        location.hash = "#/projects";
        return;
      }
      app.innerHTML = renderProjectDetailHTML(project, lang);
    } else if (isProjectsList) {
      app.innerHTML = renderProjectsListHTML(lang);
    } else {
      app.innerHTML = renderHomeHTML(lang);
    }

    updateInterface(lang);
    setActive(hash);

    renderFrame = requestAnimationFrame(() => {
      renderFrame = null;
      $$(".fade", app).forEach((element) => element.classList.add("show"));

      if (isHome) {
        enableTimeline();
        enableScrollSpy();
      }

      if (isHome && sectionIds.includes(hash)) {
        scrollToSection(hash);
      } else {
        scrollTop();
      }
    });
  }

  /* Événements de l'interface. */
  themeBtn.addEventListener("click", () => {
    const theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = theme;
    savePreference("theme", theme);
  });

  burger.addEventListener("click", () => {
    setMenuOpen(!menu.classList.contains("open"));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      setMenuOpen(false);
      burger.focus();
    }
  });

  langSel.addEventListener("change", (event) => {
    currentLang = event.target.value === "en" ? "en" : "fr";
    savePreference("lang", currentLang);
    route();
  });

  function goHome(event) {
    event.preventDefault();
    setMenuOpen(false);

    if (location.hash === "#home") {
      scrollTop();
      setActive("home");
    } else {
      location.hash = "#home";
    }
  }

  $("#brand-home").addEventListener("click", goHome);
  $("#nav-home").addEventListener("click", goHome);

  sectionIds.forEach((id) => {
    $("#nav-" + id).addEventListener("click", (event) => {
      event.preventDefault();
      setMenuOpen(false);

      if (location.hash === "#" + id) {
        scrollToSection(id);
        setActive(id);
      } else {
        location.hash = "#" + id;
      }
    });
  });

  $("#nav-projects").addEventListener("click", (event) => {
    if (location.hash === "#/projects") {
      event.preventDefault();
      scrollTop();
    }
  });

  window.addEventListener("hashchange", route);
  route();
})();
