/*
 * ===============================================================
 *  CONTENU DU PORTFOLIO — C'EST LE SEUL FICHIER À REMPLIR
 * ===============================================================
 *  - Chaque texte existe en français (fr) et en anglais (en).
 *  - Tu peux mettre du HTML dans les textes : <strong>, <ul><li>, <a>...
 *  - Les chemins de fichiers sont relatifs à la racine du site
 *    (ex. "assets/cv/CV_FR.pdf").
 *  - Une valeur vide ("") pour une image / vidéo affiche un emplacement vide.
 */
const PORTFOLIO = {
  /* ---------- Identité ---------- */
  name: "Mell RIAHI",
  footer: {
    fr: "Mell RIAHI — ENSEEIHT · Sciences du Numérique",
    en: "Mell RIAHI — ENSEEIHT · Digital Sciences",
  },
  linkedin: "https://www.linkedin.com/in/ton-profil",

  // Dépose tes PDF dans assets/cv/
  cv: {
    fr: { label: "CV (FR)", href: "assets/cv/CV_Mell_Riahi_FR.pdf" },
    en: { label: "Resume (EN)", href: "assets/cv/CV_Mell_Riahi_EN.pdf" },
  },

  /* ---------- Accueil ---------- */
  home: {
    fr: {
      chip: "ENSEEIHT · Sciences du Numérique",
      intro: `
        Élève ingénieur en <strong>première année</strong> à l'<strong>ENSEEIHT</strong>
        (département <strong>Sciences du Numérique</strong>), après deux années de
        <strong>classes préparatoires PCSI / PC*</strong>.
        Je donne aussi des <strong>cours particuliers</strong> en mathématiques,
        physique et chimie.
      `,
      pitchTitle: "Elevator pitch",
      pitchIntro: "Découvrez ma vidéo de présentation ci-dessous :",
    },
    en: {
      chip: "ENSEEIHT · Digital Sciences",
      intro: `
        <strong>First-year</strong> engineering student at <strong>ENSEEIHT</strong>
        (<strong>Digital Sciences</strong> department), after two years of
        <strong>preparatory classes PCSI / PC*</strong>.
        I also work as a <strong>private tutor</strong> in mathematics,
        physics and chemistry.
      `,
      pitchTitle: "Elevator pitch",
      pitchIntro: "Watch my pitch below:",
    },
  },

  // Dépose ta vidéo dans assets/video/ (ex. "assets/video/pitch.mp4")
  pitchVideo: {
    src: "",
    poster: "",
  },

  /* ---------- Parcours (du plus récent au plus ancien) ---------- */
  timeline: {
    fr: {
      title: "Parcours académique",
      items: [
        { title: "ENSEEIHT — Sciences du Numérique", subtitle: "2026 – auj. · 1re année (actuel)" },
        { title: "CPGE PC* · Lycée Dumont d'Urville, Toulon", subtitle: "2025–2026" },
        { title: "CPGE PCSI · Lycée Dumont d'Urville, Toulon", subtitle: "2024–2025" },
        {
          title: "Lycée Paul Cézanne · Aix-en-Provence",
          subtitle: "2021–2024 · Bac général (Maths & Physique-Chimie), mention Bien",
        },
      ],
    },
    en: {
      title: "Academic pathway",
      items: [
        { title: "ENSEEIHT — Digital Sciences", subtitle: "2026 – present · Year 1 (current)" },
        { title: "Preparatory class PC* · Lycée Dumont d'Urville, Toulon", subtitle: "2025–2026" },
        { title: "Preparatory class PCSI · Lycée Dumont d'Urville, Toulon", subtitle: "2024–2025" },
        {
          title: "Lycée Paul Cézanne · Aix-en-Provence",
          subtitle: "2021–2024 · French Baccalauréat (Maths & Physics-Chemistry), with honors",
        },
      ],
    },
  },

  /* ---------- Encart "Mes projets" sur l'accueil ---------- */
  projectsIntro: {
    fr: {
      title: "Mes projets",
      lead: "Sélection de projets et meilleures productions.",
      link: "Ouvrir la page dédiée",
      pageLead: "Page dédiée aux projets et meilleures productions.",
    },
    en: {
      title: "My projects",
      lead: "Selection of projects and key deliverables.",
      link: "Open the dedicated page",
      pageLead: "Dedicated page for projects & deliverables.",
    },
  },

  /* ---------- Projets ----------
   * slug  : identifiant unique, sans espace ni accent (sert dans l'URL)
   * cover : image 16:9 dans assets/img/projects/ ("" = image par défaut)
   * tags  : mots-clés affichés sous le titre (facultatif)
   * Copie-colle un bloc { ... } pour ajouter un projet.
   */
  projects: [
    {
      slug: "projet-1",
      cover: "",
      tags: ["Compétence", "Outil", "Techno"],
      fr: {
        title: "Titre du projet 1",
        summary: "Résumé en une phrase.",
        body: `
          <p><strong>Contexte :</strong> ...</p>
          <p><strong>Missions principales :</strong></p>
          <ul>
            <li>Mission 1</li>
            <li>Mission 2</li>
            <li>Mission 3</li>
          </ul>
          <p class="small">Durée : ... — Compétences : ...</p>
        `,
      },
      en: {
        title: "Project 1 title",
        summary: "One-sentence summary.",
        body: `
          <p><strong>Context:</strong> ...</p>
          <p><strong>Main tasks:</strong></p>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
          <p class="small">Duration: ... — Skills: ...</p>
        `,
      },
    },
    {
      slug: "projet-2",
      cover: "",
      tags: [],
      fr: {
        title: "Titre du projet 2",
        summary: "Résumé en une phrase.",
        body: `<p>Description détaillée du projet...</p>`,
      },
      en: {
        title: "Project 2 title",
        summary: "One-sentence summary.",
        body: `<p>Detailed project description...</p>`,
      },
    },
    {
      slug: "projet-3",
      cover: "",
      tags: [],
      fr: {
        title: "Titre du projet 3",
        summary: "Résumé en une phrase.",
        body: `<p>Description détaillée du projet...</p>`,
      },
      en: {
        title: "Project 3 title",
        summary: "One-sentence summary.",
        body: `<p>Detailed project description...</p>`,
      },
    },
  ],

  /* ---------- Sections de l'accueil (ajoutées au menu automatiquement) ----------
   * id       : ancre unique (sans espace)
   * nav      : libellé dans le menu
   * subcards : encarts secondaires facultatifs (ex. un voyage, une expérience)
   * Ajoute, supprime ou réordonne librement.
   */
  sections: [
    {
      id: "mobility",
      fr: {
        nav: "Mobilité",
        title: "Mobilité internationale",
        body: `<p>Objectifs, destinations envisagées, motivations...</p>`,
      },
      en: {
        nav: "Mobility",
        title: "International mobility",
        body: `<p>Goals, target destinations, motivations...</p>`,
      },
    },
    {
      id: "civic",
      fr: {
        nav: "Engagement",
        title: "Engagement",
        body: `<p><strong>Association</strong> — depuis 20XX. Valeurs : ...</p>`,
        subcards: [
          {
            title: "Expérience marquante — été 20XX",
            body: `<p>Raconte ici une expérience (lien vidéo, photos...).</p>`,
          },
        ],
      },
      en: {
        nav: "Civic",
        title: "Civic engagement",
        body: `<p><strong>Organization</strong> — since 20XX. Values: ...</p>`,
        subcards: [
          {
            title: "Highlight — Summer 20XX",
            body: `<p>Describe an experience here (video link, photos...).</p>`,
          },
        ],
      },
    },
    {
      id: "sports",
      fr: {
        nav: "Sports",
        title: "Sports & autres activités",
        body: `<p><strong>Water-polo</strong> pendant 10 ans, passionné par tout ce qui touche au sport, et <strong>musique</strong>. Langues : français (C2), espagnol (C1+), anglais (B2+).</p>`,
      },
      en: {
        nav: "Sports",
        title: "Sports & activities",
        body: `<p><strong>Water polo</strong> for 10 years, passionate about all sports, and <strong>music</strong>. Languages: French (C2), Spanish (C1+), English (B2+).</p>`,
      },
    },
  ],
};
