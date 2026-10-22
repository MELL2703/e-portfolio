# e-portfolio

Squelette d'e-portfolio statique (HTML/CSS/JS, sans dépendance), bilingue FR/EN,
thème clair/sombre, prêt pour GitHub Pages.

## Ce qu'il faut remplir

Tout le contenu est dans **`assets/js/content.js`** :

| Bloc            | Contenu                                                   |
| --------------- | --------------------------------------------------------- |
| `name`, `footer`, `linkedin` | Identité et lien LinkedIn                    |
| `cv`            | Libellés + chemins des CV (PDF dans `assets/cv/`)         |
| `home`          | Badge, texte d'intro, titre de la vidéo                   |
| `pitchVideo`    | Vidéo de présentation (MP4 dans `assets/video/`)          |
| `timeline`      | Frise du parcours (du plus récent au plus ancien)         |
| `projectsIntro` | Encart « Mes projets » de l'accueil                       |
| `projects`      | Liste des projets (chacun a sa page détail)               |
| `sections`      | Sections de l'accueil (Mobilité, Engagement, Sports…) — elles apparaissent automatiquement dans le menu |

Pense aussi au `<title>` et à la `description` dans `index.html`.

## Arborescence

```
index.html
assets/
  css/style.css        ← styles (couleurs dans :root)
  js/content.js        ← TON CONTENU
  js/main.js           ← moteur (pas besoin d'y toucher)
  cv/                  ← CV PDF
  video/               ← vidéo de présentation
  img/projects/        ← images des projets (format 16:9)
  img/placeholder.svg  ← image par défaut
  favicon.svg
```

## Tester en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mettre en ligne (GitHub Pages)

Settings → Pages → Source : *Deploy from a branch* → branche `main`, dossier `/ (root)`.
