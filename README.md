# Engineering Handbook

**The Open Engineering Study System**

Engineering OS is a long-term, open-source learning system for software engineers and computer science students. It combines structured technical documentation, learning roadmaps, and interview preparation in a single MkDocs site styled for clarity and depth—similar in spirit to professional engineering handbooks.

## Features

- **MkDocs** with **Material for MkDocs** for navigation, search, and dark mode
- **Markdown** content with **Mermaid** diagrams, **admonitions**, **tabs**, and **collapsible** sections
- **Custom CSS** for banners, cards, and concept boxes
- **GitHub Pages** deployment via `mkdocs gh-deploy`

## Local development

### Prerequisites

- Python 3.10+ recommended
- `pip`

### Setup

```bash
cd engineering-os
python -m venv .venv
```

Activate the virtual environment:

- **Windows (PowerShell):** `.venv\Scripts\Activate.ps1`
- **macOS/Linux:** `source .venv/bin/activate`

Install dependencies:

```bash
pip install -r requirements.txt
```

### Serve locally

```bash
mkdocs serve
```

If `mkdocs` is not on your `PATH` (common on Windows), use:

```bash
python -m mkdocs serve
```

Open the URL shown in the terminal. Because `mkdocs.yml` sets `site_url` for a GitHub **project** page (`…/engineering-os/`), the dev server may serve under that path (for example `http://127.0.0.1:8000/engineering-os/`). Adjust `site_url` after you know your real GitHub username and repository name.

### Build static site

```bash
mkdocs build
```

Output is written to `site/`.

## Deployment (GitHub Pages)

1. Create a GitHub repository (for example `engineering-os`).
2. Update `mkdocs.yml`: set `site_url` and `repo_url` to your repository.
3. Push this project to GitHub.
4. From the repository root, with `mkdocs-material` installed:

```bash
mkdocs gh-deploy
```

This builds the site and pushes it to the `gh-pages` branch. Enable **GitHub Pages** in the repository settings to serve from `gh-pages` (root).

If your site is published at `https://<user>.github.io/<repo>/`, ensure `site_url` matches that path so internal links and assets resolve correctly.

## Project structure

- `mkdocs.yml` — site configuration, theme, extensions, navigation
- `docs/` — all Markdown content, styles, and assets
- `docs/stylesheets/extra.css` — custom UI components
- `docs/diagrams/` — static diagram assets referenced from pages

## Contributing

Improvements to content, examples, and diagrams are welcome. Please keep pages consistent with the established learning template (overview, concepts, examples, interview questions, practice, resources).

## License

Specify your preferred open-source license (for example MIT) when you publish the repository.
