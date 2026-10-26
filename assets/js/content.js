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
  linkedin: "https://www.linkedin.com/in/mell-riahi",

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
      slug: "tipe-bois-transparent",
      cover: "assets/img/projects/tipe/cover.jpg",
      tags: ["TIPE", "Chimie", "Thermique", "Optique", "Python"],
      fr: {
        title: "TIPE — Le bois transparent, alternative au verre des fenêtres ?",
        summary:
          "Fabrication de bois transparent, mesure de sa transparence et de sa conductivité thermique, et comparaison avec le verre.",
        body: `
          <p>
            <strong>TIPE de PC*</strong> (2025-2026) — thème « Cycles et boucles ».
          </p>
          <p><strong>Problématique :</strong>
            <em>Les propriétés physiques et chimiques du bois transparent lui permettraient-elles de remplacer le verre des fenêtres ?</em>
          </p>
          <p>Les fenêtres représentent 10 à 15 % des pertes thermiques d'une maison. Le bois transparent, un matériau biosourcé, pourrait-il mieux isoler que le verre ?</p>

          <h2 class="h2">1. Fabrication</h2>
          <ul>
            <li><strong>Bois de départ :</strong> plaquettes de balsa découpées</li>
            <li><strong>Délignification :</strong> H<sub>2</sub>O<sub>2</sub> à reflux pendant 4 h puis bain d'éthanol à 50 % : la lignine (responsable de la couleur brune) est éliminée et le bois devient blanc</li>
            <li><strong>Polymérisation :</strong> infiltration de résine époxy (indice <em>n</em> ≈ 1,5, proche de celui de la cellulose ≈ 1,53) pour combler les pores</li>
            <li><strong>Résultat :</strong> un composite translucide et résistant</li>
          </ul>

          <h2 class="h2">2. Caractérisation</h2>
          <p><strong>Transparence :</strong> mesure de la transmission d'un laser (<em>T</em> = <em>I</em><sub>avec bois</sub> / <em>I</em><sub>sans bois</sub>) à l'oscilloscope. Principal défaut observé : la <strong>diffusion</strong> de la lumière.</p>
          <div class="grid cols-2">
          <figure class="figure">
            <img src="assets/img/projects/tipe/transparence-laser.jpg" alt="Banc optique : mesure de la transmission" loading="lazy" />
            <figcaption class="small">Banc optique : mesure de la transmission</figcaption>
          </figure>
          <figure class="figure">
            <img src="assets/img/projects/tipe/diffusion.jpg" alt="Diffusion du faisceau à travers l'échantillon" loading="lazy" />
            <figcaption class="small">Diffusion du faisceau à travers l'échantillon</figcaption>
          </figure>
          </div>
          <p><strong>Conductivité thermique λ :</strong> fabrication d'une boîte isolée thermiquement, fermée par l'échantillon, et suivi du refroidissement de 50 g d'eau chaude (Φ = λ·S·ΔT / e = m·c·dT/dt).</p>
          <div class="grid cols-2">
          <figure class="figure">
            <img src="assets/img/projects/tipe/boite-isolante.jpg" alt="Boîte isolée fabriquée pour la mesure" loading="lazy" />
            <figcaption class="small">Boîte isolée fabriquée pour la mesure</figcaption>
          </figure>
          <figure class="figure">
            <img src="assets/img/projects/tipe/mesure-lambda.jpg" alt="Acquisition de la température" loading="lazy" />
            <figcaption class="small">Acquisition de la température</figcaption>
          </figure>
          </div>
          <ul>
            <li>Bois transparent : <strong>λ = 0,52 ± 0,10 W·m⁻¹·K⁻¹</strong> (littérature : 0,35)</li>
            <li>Verre : <strong>λ = 1,13 ± 0,27 W·m⁻¹·K⁻¹</strong> (littérature : 1,00)</li>
            <li>Soit une conductivité thermique <strong>54 % plus faible</strong> que celle du verre</li>
          </ul>

          <h2 class="h2">3. Modélisation et comparaison</h2>
          <p>Calcul des résistances thermiques et des coefficients de transmission <em>U</em> en simple et double vitrage (argon), puis des puissances perdues pour une maison (16 m² vitrés, 20 °C intérieur), tracées en Python (matplotlib).</p>
          <ul>
            <li>Simple vitrage : <em>U</em> = 5,85 → <strong>3,17 W/(m²·K)</strong></li>
            <li>Double vitrage : <em>U</em> = 0,93 → <strong>0,82 W/(m²·K)</strong></li>
            <li>En hiver (5 °C dehors), simple vitrage : 1 404 W perdus avec le verre contre <strong>761 W</strong> avec le bois transparent</li>
          </ul>
          <div class="grid cols-2">
          <figure class="figure">
            <img src="assets/img/projects/tipe/pertes-hiver.jpg" alt="Puissance perdue en hiver" loading="lazy" />
            <figcaption class="small">Puissance perdue en hiver</figcaption>
          </figure>
          <figure class="figure">
            <img src="assets/img/projects/tipe/pertes-ete.jpg" alt="Puissance perdue en été" loading="lazy" />
            <figcaption class="small">Puissance perdue en été</figcaption>
          </figure>
          </div>

          <h2 class="h2">Conclusion</h2>
          <ul>
            <li>Propriétés isolantes confirmées : en simple vitrage, la puissance perdue est presque divisée par 2 ; en double vitrage, l'écart se resserre.</li>
            <li>Limites : transparence partielle (diffusion), coût du polymère et passage à l'échelle industrielle.</li>
          </ul>
          <p class="small">
            Compétences : chimie expérimentale, conception d'un protocole de mesure, optique, thermique, calcul d'incertitudes, Python (numpy, matplotlib).
          </p>
        `,
      },
      en: {
        title: "Research project — Transparent wood as an alternative to window glass?",
        summary:
          "Making transparent wood, measuring its transparency and thermal conductivity, and comparing it with glass.",
        body: `
          <p>
            <strong>PC* research project (TIPE)</strong> (2025-2026) — theme: “Cycles and loops”.
          </p>
          <p><strong>Research question :</strong>
            <em>Could the physical and chemical properties of transparent wood allow it to replace window glass?</em>
          </p>
          <p>Windows account for 10–15% of a house's heat losses. Could transparent wood, a bio-based material, insulate better than glass?</p>

          <h2 class="h2">1. Manufacturing</h2>
          <ul>
            <li><strong>Starting material :</strong> cut balsa wood plates</li>
            <li><strong>Delignification :</strong> H<sub>2</sub>O<sub>2</sub> under reflux for 4 h, then a 50% ethanol bath: lignin (responsible for the brown colour) is removed and the wood turns white</li>
            <li><strong>Polymerisation :</strong> epoxy resin infiltration (index <em>n</em> ≈ 1.5, close to cellulose ≈ 1.53) to fill the pores</li>
            <li><strong>Result :</strong> a translucent, strong composite</li>
          </ul>

          <h2 class="h2">2. Characterisation</h2>
          <p><strong>Transparency :</strong> laser transmission measured on an oscilloscope (<em>T</em> = <em>I</em><sub>with wood</sub> / <em>I</em><sub>without</sub>). Main issue observed: light <strong>scattering</strong>.</p>
          <div class="grid cols-2">
          <figure class="figure">
            <img src="assets/img/projects/tipe/transparence-laser.jpg" alt="Optical bench: transmission measurement" loading="lazy" />
            <figcaption class="small">Optical bench: transmission measurement</figcaption>
          </figure>
          <figure class="figure">
            <img src="assets/img/projects/tipe/diffusion.jpg" alt="Beam scattering through the sample" loading="lazy" />
            <figcaption class="small">Beam scattering through the sample</figcaption>
          </figure>
          </div>
          <p><strong>Thermal conductivity λ :</strong> I built a thermally insulated box closed by the sample and recorded the cooling of 50 g of hot water (Φ = λ·S·ΔT / e = m·c·dT/dt).</p>
          <div class="grid cols-2">
          <figure class="figure">
            <img src="assets/img/projects/tipe/boite-isolante.jpg" alt="Insulated box built for the measurement" loading="lazy" />
            <figcaption class="small">Insulated box built for the measurement</figcaption>
          </figure>
          <figure class="figure">
            <img src="assets/img/projects/tipe/mesure-lambda.jpg" alt="Temperature acquisition" loading="lazy" />
            <figcaption class="small">Temperature acquisition</figcaption>
          </figure>
          </div>
          <ul>
            <li>Transparent wood : <strong>λ = 0,52 ± 0,10 W·m⁻¹·K⁻¹</strong> (literature : 0,35)</li>
            <li>Glass : <strong>λ = 1,13 ± 0,27 W·m⁻¹·K⁻¹</strong> (literature : 1,00)</li>
            <li>That is a <strong>54% lower</strong> thermal conductivity than glass</li>
          </ul>

          <h2 class="h2">3. Modelling and comparison</h2>
          <p>Computed thermal resistances and transmission coefficients <em>U</em> for single and double glazing (argon), then the power lost for a house (16 m² of windows, 20 °C inside), plotted in Python (matplotlib).</p>
          <ul>
            <li>Single glazing : <em>U</em> = 5,85 → <strong>3,17 W/(m²·K)</strong></li>
            <li>Double glazing : <em>U</em> = 0,93 → <strong>0,82 W/(m²·K)</strong></li>
            <li>In winter (5 °C outside), single glazing: 1,404 W lost with glass vs <strong>761 W</strong> with transparent wood</li>
          </ul>
          <div class="grid cols-2">
          <figure class="figure">
            <img src="assets/img/projects/tipe/pertes-hiver.jpg" alt="Power lost in winter" loading="lazy" />
            <figcaption class="small">Power lost in winter</figcaption>
          </figure>
          <figure class="figure">
            <img src="assets/img/projects/tipe/pertes-ete.jpg" alt="Power lost in summer" loading="lazy" />
            <figcaption class="small">Power lost in summer</figcaption>
          </figure>
          </div>

          <h2 class="h2">Conclusion</h2>
          <ul>
            <li>Insulating properties confirmed: with single glazing, power loss is nearly halved; with double glazing the gap narrows.</li>
            <li>Limits: partial transparency (scattering), polymer cost and industrial scale-up.</li>
          </ul>
          <p class="small">
            Skills: experimental chemistry, measurement protocol design, optics, heat transfer, uncertainty analysis, Python (numpy, matplotlib).
          </p>
        `,
      },
    },
    {
      slug: "stopeat",
      cover: "assets/img/projects/stopeat/cover.svg",
      tags: ["💡 En réflexion", "Entrepreneuriat", "Nutrition", "Marque"],
      fr: {
        title: "Stop'Eat — Projet de marque",
        summary:
          "Idée de marque de sachets très peu caloriques à diluer dans l'eau, pour aider à mieux gérer la faim.",
        body: `
          <p>
            <strong>Projet personnel en réflexion.</strong> Stop'Eat (jeu de mots
            avec « stop it ») serait une marque destinée aux personnes qui
            souhaitent perdre du poids, par envie ou pour leur santé.
          </p>
          <p><strong>Le concept :</strong></p>
          <ul>
            <li>De petits sachets <strong>très peu caloriques</strong></li>
            <li>À <strong>mélanger avec de l'eau</strong></li>
            <li>Pensés pour aider à <strong>réduire la sensation de faim</strong> entre les repas</li>
          </ul>
          <p class="small">Statut : idée en cours de réflexion — cette page sera mise à jour au fil du projet.</p>
        `,
      },
      en: {
        title: "Stop'Eat — Brand project",
        summary:
          "Idea for a brand of very low-calorie sachets mixed with water, to help manage hunger.",
        body: `
          <p>
            <strong>Personal project, at the idea stage.</strong> Stop'Eat (a pun on
            “stop it”) would be a brand for people who want to lose weight, by
            choice or for health reasons.
          </p>
          <p><strong>The concept:</strong></p>
          <ul>
            <li>Small, <strong>very low-calorie</strong> sachets</li>
            <li>To be <strong>mixed with water</strong></li>
            <li>Designed to help <strong>reduce hunger</strong> between meals</li>
          </ul>
          <p class="small">Status: early-stage idea — this page will be updated as the project evolves.</p>
        `,
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
