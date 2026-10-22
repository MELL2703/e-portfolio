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
  name: "Prénom Nom",
  footer: {
    fr: "Prénom Nom — École · Filière",
    en: "Prénom Nom — School · Major",
  },
  linkedin: "https://www.linkedin.com/in/ton-profil",

  // Dépose tes PDF dans assets/cv/
  cv: {
    fr: { label: "CV (FR)", href: "assets/cv/CV_FR.pdf" },
    en: { label: "Resume (EN)", href: "assets/cv/CV_EN.pdf" },
  },

  /* ---------- Accueil ---------- */
  home: {
    fr: {
      chip: "École · Filière",
      intro: `
        Étudiant(e) en <strong>[année]</strong> à <strong>[école]</strong>,
        après <strong>[formation précédente]</strong>.
        Je m'intéresse à <strong>[domaine 1]</strong>, <strong>[domaine 2]</strong>
        et <strong>[domaine 3]</strong>.
      `,
      pitchTitle: "Elevator pitch",
      pitchIntro: "Découvrez ma vidéo de présentation ci-dessous :",
    },
    en: {
      chip: "School · Major",
      intro: `
        <strong>[Year]</strong> student at <strong>[school]</strong>,
        after <strong>[previous degree]</strong>.
        I am interested in <strong>[field 1]</strong>, <strong>[field 2]</strong>
        and <strong>[field 3]</strong>.
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
        { title: "École — Filière", subtitle: "20XX–20XX · Année en cours" },
        { title: "Formation précédente", subtitle: "20XX–20XX" },
        { title: "Diplôme", subtitle: "20XX–20XX · Spécialité" },
        { title: "Lycée", subtitle: "20XX–20XX · Bac, spécialités, mention" },
      ],
    },
    en: {
      title: "Academic pathway",
      items: [
        { title: "School — Major", subtitle: "20XX–20XX · Current year" },
        { title: "Previous program", subtitle: "20XX–20XX" },
        { title: "Degree", subtitle: "20XX–20XX · Specialty" },
        { title: "High school", subtitle: "20XX–20XX · Baccalauréat, honors" },
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
        body: `<p>Sport 1, sport 2, musique... Soft skills : ...</p>`,
      },
      en: {
        nav: "Sports",
        title: "Sports & activities",
        body: `<p>Sport 1, sport 2, music... Soft skills: ...</p>`,
      },
    },
  ],
};
