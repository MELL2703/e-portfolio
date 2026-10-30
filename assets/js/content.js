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

  // Ta photo (carrée de préférence), ex. "assets/img/photo.jpg" — "" = initiales
  photo: "",

  // Dépose tes PDF dans assets/cv/
  cv: {
    fr: { label: "CV (FR)", href: "assets/cv/CV_Mell_Riahi_FR.pdf" },
    en: { label: "CV (EN)", href: "assets/cv/CV_Mell_Riahi_EN.pdf" },
  },

  /* ---------- Accueil ---------- */
  home: {
    fr: {
      chip: "ENSEEIHT · Sciences du Numérique",
      intro: `
        Élève ingénieur en <strong>1<sup>re</sup> année</strong> à l'<strong>ENSEEIHT</strong>
        (département <strong>Sciences du Numérique</strong>), après deux ans de
        <strong>prépa PCSI / PC*</strong>. Je m'intéresse à la
        <strong>création de jeux vidéo</strong> et à l'<strong>entrepreneuriat</strong>,
        et je donne des cours particuliers en maths, physique et chimie.
      `,
      pitchTitle: "Elevator pitch",
      pitchIntro: "Ma présentation en 2-3 minutes (en anglais) :",
    },
    en: {
      chip: "ENSEEIHT · Digital Sciences",
      intro: `
        I'm a <strong>first-year engineering student</strong> at <strong>ENSEEIHT</strong>
        (<strong>Digital Sciences</strong> department), after two years of
        <strong>preparatory classes (PCSI / PC*)</strong>. I'm interested in
        <strong>video game development</strong> and <strong>entrepreneurship</strong>,
        and I tutor maths, physics and chemistry.
      `,
      pitchTitle: "Elevator pitch",
      pitchIntro: "My 2–3 minute career story:",
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

  /* ---------- Onglet "Parcours ingénieur" (page projets) ---------- */
  projectsIntro: {
    fr: {
      nav: "Formation",
      title: "Parcours ingénieur",
      lead: "Mon parcours, ma formation à l'ENSEEIHT et mes projets.",
      link: "Voir mon parcours et mes projets",
      pageLead: "Formation, cours suivis et projets marquants.",
      projectsTitle: "Projets",
    },
    en: {
      nav: "Engineering",
      title: "Engineering course",
      lead: "My academic path, my studies at ENSEEIHT and my projects.",
      link: "See my path and projects",
      pageLead: "Education, courses and key projects.",
      projectsTitle: "Projects",
    },
  },

  // Cours de l'année en cours (affichés sur la page "Parcours ingénieur")
  courses: {
    fr: {
      title: "ENSEEIHT — Sciences du Numérique (1<sup>re</sup> année)",
      body: `<p>Programmation (Python, Ada), mathématiques et informatique fondamentale.</p>`,
    },
    en: {
      title: "ENSEEIHT — Digital Sciences (Year 1)",
      body: `<p>Programming (Python, Ada), mathematics and computer science fundamentals.</p>`,
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
        body: `
          <p>
            Ma famille vient du <strong>Pérou</strong> : j'ai grandi avec l'espagnol,
            que je parle avec ma grand-mère. Partir à l'étranger fait partie de mon
            projet. Voici trois projets de mobilité, chacun lié à un de mes
            <a href="#career">modèles professionnels</a> :
          </p>
        `,
        subcards: [
          {
            title: "🇯🇵 Japon — jeu vidéo",
            body: `<p>Stage dans un studio de jeux vidéo, pour voir comment on conçoit un jeu de l'intérieur. Comme Jean Muller, je veux transformer une passion en métier.</p><p class="small">Lié au modèle n°2.</p>`,
          },
          {
            title: "🇺🇸 États-Unis — entrepreneuriat",
            body: `<p>Stage dans une start-up, pour progresser en anglais et apprendre à lancer et financer un produit, comme Jean-Emmanuel Faure avec Water Horizon.</p><p class="small">Lié au modèle n°1.</p>`,
          },
          {
            title: "🇵🇪 Pérou — entrepreneuriat à impact",
            body: `<p>Stage ou semestre à Lima, en espagnol, dans une entreprise à impact social. Comme Raymond Sarr au Sénégal, je veux m'appuyer sur mes racines pour entreprendre utilement.</p><p class="small">Lié au modèle n°3.</p>`,
          },
        ],
      },
      en: {
        nav: "Mobility",
        title: "International mobility",
        body: `
          <p>
            My family comes from <strong>Peru</strong>: I grew up speaking Spanish,
            which I still speak with my grandmother. Going abroad is part of my
            plan. Here are three mobility projects, each linked to one of my
            <a href="#career">role models</a>:
          </p>
        `,
        subcards: [
          {
            title: "🇯🇵 Japan — video games",
            body: `<p>An internship in a game studio, to see how games are designed and built from the inside. Like Jean Muller, I want to turn a passion into a job.</p><p class="small">Linked to role model #2.</p>`,
          },
          {
            title: "🇺🇸 United States — entrepreneurship",
            body: `<p>An internship in a start-up, to improve my English and learn how to launch and fund a product, the way Jean-Emmanuel Faure did with Water Horizon.</p><p class="small">Linked to role model #1.</p>`,
          },
          {
            title: "🇵🇪 Peru — impact entrepreneurship",
            body: `<p>An internship or semester in Lima, in Spanish, with a social-impact company. Like Raymond Sarr in Senegal, I want to build on my roots to start something useful.</p><p class="small">Linked to role model #3.</p>`,
          },
        ],
      },
    },
    {
      id: "civic",
      fr: {
        nav: "Engagement",
        title: "Développement durable & engagement",
        body: `<p>Mes engagements et ce que j'apprends sur le développement durable.</p>`,
        subcards: [
          {
            title: "Soutien scolaire · ODD 4",
            body: `<p>Cours de maths, physique et chimie en famille depuis 2024 et chez Complétude depuis septembre 2026. Une manière concrète de contribuer à une <strong>éducation de qualité</strong>.</p>`,
          },
          {
            title: "BDE de l'ENSEEIHT",
            body: `<p>Membre d'une liste candidate pour reprendre le bureau des élèves l'année prochaine.</p>`,
          },
          {
            title: "TIPE · ODD 7, 11, 13",
            body: `<p>Mon TIPE sur le <a href="#/project/tipe-bois-transparent">bois transparent</a> étudie un matériau biosourcé pour réduire les pertes de chaleur des bâtiments.</p>`,
          },
          {
            title: "À venir cette année",
            body: `<ul><li>Sulitest</li><li>Fresque du Climat</li><li>Journée Entrepreneuriat</li><li>Infographie d'équipe — projet d'engagement civique (janvier)</li></ul>`,
          },
        ],
      },
      en: {
        nav: "Sustainability",
        title: "Sustainability & civic engagement",
        body: `<p>What I do for others and what I'm learning about sustainable development.</p>`,
        subcards: [
          {
            title: "Tutoring · SDG 4",
            body: `<p>Maths, physics and chemistry lessons for family members since 2024 and with Complétude since September 2026. A concrete way to support <strong>quality education</strong>.</p>`,
          },
          {
            title: "ENSEEIHT student council",
            body: `<p>Member of a team running to lead the student council (BDE) next year.</p>`,
          },
          {
            title: "Research project · SDG 7, 11, 13",
            body: `<p>My research project on <a href="#/project/tipe-bois-transparent">transparent wood</a> looks at a bio-based material that could reduce heat loss in buildings.</p>`,
          },
          {
            title: "Coming up this year",
            body: `<ul><li>Sulitest</li><li>Climate Fresk</li><li>Entrepreneurship Day</li><li>Team infographic — civic engagement proposal (January)</li></ul>`,
          },
        ],
      },
    },
    {
      id: "sports",
      fr: {
        nav: "Sport",
        title: "Sport & autres activités",
        body: `<p><strong>Water-polo</strong> pendant 10 ans : l'esprit d'équipe, l'endurance et la régularité. J'aime le sport en général, et la <strong>musique</strong>.</p><p>Langues : français (C2), espagnol (C1, origines péruviennes), anglais (B2+).</p>`,
      },
      en: {
        nav: "Sports",
        title: "Sport & other activities",
        body: `<p><strong>Water polo</strong> for 10 years, which taught me teamwork, endurance and consistency. I enjoy sport in general, and <strong>music</strong>.</p><p>Languages: French (C2), Spanish (C1, Peruvian heritage), English (B2+).</p>`,
      },
    },
    {
      id: "career",
      fr: {
        nav: "Projet pro",
        title: "Projet professionnel",
        body: `
          <p>
            Deux pistes m'attirent : la <strong>création de jeux vidéo</strong> et
            l'<strong>entrepreneuriat</strong> (voir mon projet
            <a href="#/project/stopeat">Stop'Eat</a>).
          </p>
          <div class="btn-row">
            <a class="btn primary" href="assets/cv/CV_Mell_Riahi_FR.pdf" download>📄 CV (FR)</a>
            <a class="btn" href="assets/cv/CV_Mell_Riahi_EN.pdf" download>📄 CV (EN)</a>
            <a class="btn linkedin linkedin-link" href="https://www.linkedin.com/in/mell-riahi" target="_blank" rel="noopener">LinkedIn</a>
            <a class="btn" href="#home">🎬 Elevator pitch</a>
          </div>
        `,
        subcards: [
          {
            title: "Modèle n°1 — Jean-Emmanuel Faure",
            body: `<p><strong>Fondateur de <a href="https://www.edf.fr/water-horizon-batterie-mobile-valorise-chaleur-perdue" target="_blank" rel="noopener">Water Horizon</a></strong> (Toulouse, 2017). Diplômé N7 en mécanique des fluides (2015).</p><p>Sa start-up fabrique des batteries thermiques mobiles qui récupèrent la chaleur perdue des usines. L'idée lui est venue en visitant une usine pendant ses études. Premiers prototypes faits chez lui, puis 18 M€ levés en 2025.</p><p><strong>Ce que j'en retiens :</strong> une idée d'ingénieur peut devenir une entreprise, à condition de prototyper vite et de s'entourer.</p><p class="small">→ Mobilité : États-Unis.</p>`,
          },
          {
            title: "Modèle n°2 — Jean Muller",
            body: `<p><strong>Fondateur de PassPassion</strong> (Toulouse, 2020). Diplômé N7 en électronique (1990).</p><p>Après une vingtaine d'années dans le secteur spatial, il crée à 52 ans une entreprise qui fait découvrir des métiers-passions à travers des stages : plus de 500 stages organisés en 2023.</p><p><strong>Ce que j'en retiens :</strong> il n'est jamais trop tard pour transformer une passion en projet.</p><p class="small">→ Mobilité : Japon.</p>`,
          },
          {
            title: "Modèle n°3 — Raymond Sarr",
            body: `<p><strong>Fondateur de <a href="https://www.mondedesgrandesecoles.fr/jokosun-la-startup-qui-rend-lenergie-solaire-accessible-a-tous/" target="_blank" rel="noopener">Jokosun</a></strong> (2017). Ingénieur INP-ENSEEIHT.</p><p>Inspiré par ses racines sénégalaises, il a créé une entreprise qui apporte l'énergie solaire aux zones rurales du Sénégal : plus de 3 000 personnes ont eu accès à l'électricité.</p><p><strong>Ce que j'en retiens :</strong> ses origines peuvent devenir une force pour entreprendre. Ça me parle, avec ma famille péruvienne.</p><p class="small">→ Mobilité : Pérou.</p>`,
          },
          {
            title: "Expérience",
            body: `<ul><li><strong>Professeur particulier</strong>, Complétude — depuis sept. 2026</li><li><strong>Cours particuliers</strong> en famille — depuis 2024</li></ul>`,
          },
        ],
      },
      en: {
        nav: "Career",
        title: "Career development",
        body: `
          <p>
            Two paths appeal to me: <strong>video game development</strong> and
            <strong>entrepreneurship</strong> (see my
            <a href="#/project/stopeat">Stop'Eat</a> project).
          </p>
          <div class="btn-row">
            <a class="btn primary" href="assets/cv/CV_Mell_Riahi_EN.pdf" download>📄 CV (EN)</a>
            <a class="btn" href="assets/cv/CV_Mell_Riahi_FR.pdf" download>📄 CV (FR)</a>
            <a class="btn linkedin linkedin-link" href="https://www.linkedin.com/in/mell-riahi" target="_blank" rel="noopener">LinkedIn</a>
            <a class="btn" href="#home">🎬 Elevator pitch</a>
          </div>
        `,
        subcards: [
          {
            title: "Role model #1 — Jean-Emmanuel Faure",
            body: `<p><strong>Founder of <a href="https://www.edf.fr/en/water-horizon-mobile-battery-recovers-waste-heat" target="_blank" rel="noopener">Water Horizon</a></strong> (Toulouse, 2017). ENSEEIHT graduate in fluid mechanics (2015).</p><p>His start-up builds mobile thermal batteries that recover waste heat from factories. The idea came from a factory visit during his studies. He built the first prototypes at home and raised €18M in 2025.</p><p><strong>What I take from him:</strong> an engineering idea can become a company if you prototype fast and build the right team.</p><p class="small">→ Mobility: United States.</p>`,
          },
          {
            title: "Role model #2 — Jean Muller",
            body: `<p><strong>Founder of PassPassion</strong> (Toulouse, 2020). ENSEEIHT graduate in electronics (1990).</p><p>After about twenty years in the space industry, he started a company at 52 that lets people try out "passion" jobs through short placements: over 500 placements organised in 2023.</p><p><strong>What I take from him:</strong> it's never too late to turn a passion into a business.</p><p class="small">→ Mobility: Japan.</p>`,
          },
          {
            title: "Role model #3 — Raymond Sarr",
            body: `<p><strong>Founder of <a href="https://www.mondedesgrandesecoles.fr/jokosun-la-startup-qui-rend-lenergie-solaire-accessible-a-tous/" target="_blank" rel="noopener">Jokosun</a></strong> (2017). INP-ENSEEIHT engineer.</p><p>Driven by his Senegalese roots, he created a company that brings solar power to rural areas of Senegal: more than 3,000 people have gained access to electricity.</p><p><strong>What I take from him:</strong> your roots can become a strength when you start a business. That speaks to me, with my Peruvian family.</p><p class="small">→ Mobility: Peru.</p>`,
          },
          {
            title: "Experience",
            body: `<ul><li><strong>Private tutor</strong>, Complétude — since Sept. 2026</li><li><strong>Private tutoring</strong> for family members — since 2024</li></ul>`,
          },
        ],
      },
    },
  ],
};
