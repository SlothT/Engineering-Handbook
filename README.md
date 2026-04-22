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
- Docker Desktop (or Docker Engine) for containerized local runs

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

### Local development with Docker (Phase 2)

Build and run the docs server in a container:

```bash
docker compose up --build
```

Stop services:

```bash
docker compose down
```

The site is available at `http://localhost:8000`.

## CI/CD pipeline (Phase 3)

This repository uses GitHub Actions workflows:

- `CI` (`.github/workflows/ci.yml`): runs on pull requests to `main` and validates docs build with strict mode.
- `Deploy Docs` (`.github/workflows/deploy.yml`): runs only when a PR is merged into `main`, validates docs build with strict mode, then deploys to GitHub Pages (`gh-pages`).

### Validate before opening a PR

Run at least one of these local validations before pushing:

```bash
python -m mkdocs build --strict
# or
docker compose up --build
```

### Deployment behavior

- PRs to `main`: CI must pass before merge.
- Merge to `main`: deploy workflow first validates (`mkdocs build --strict`) and then publishes the site to GitHub Pages.
- Ensure repo `Settings -> Pages` serves from the `gh-pages` branch.
- Ensure `mkdocs.yml` values (`site_url`, `repo_url`) match your real GitHub repository.

## Project structure

- `mkdocs.yml` — site configuration, theme, extensions, navigation
- `docs/` — all Markdown content, styles, and assets
- `docs/stylesheets/extra.css` — custom UI components
- `docs/diagrams/` — static diagram assets referenced from pages

## Contributing

Improvements to content, examples, and diagrams are welcome. Please keep pages consistent with the established learning template (overview, concepts, examples, interview questions, practice, resources).

### Phase 1: Contributor workflow (PR-first)

Use this workflow for all changes (including maintainers):

1. Sync your local `main`:

```bash
git checkout main
git pull origin main
```

2. Create a feature branch:

```bash
git checkout -b feature/<short-name>
```

3. Make changes and run local checks:

```bash
mkdocs build
```

4. Commit and push your branch:

```bash
git add .
git commit -m "Describe your change"
git push -u origin feature/<short-name>
```

5. Open a Pull Request to `main`.
6. Wait for CI checks to pass and maintainer approval.
7. Merge only after approval and green checks.

### Production-ready collaboration rules

- Protect the `main` branch: no direct push, PR required.
- Require at least one approval for every PR.
- Require status checks (lint/test/build) before merge.
- Use small, focused PRs for easier review and safer rollback.
- Keep commit messages clear and scope-limited.
- Update documentation when behavior, setup, or workflow changes.

### Phase 2 and Phase 3 rollout (Docker + CI)

The next two milestones are:

- **Phase 2 (Docker):** standard local runtime and reproducible setup.
- **Phase 3 (CI):** automated validation for each PR (lint/test/build).

Recommended validation commands while implementing these phases:

```bash
# docs sanity
mkdocs build

# when Docker is added in Phase 2
docker compose up --build
docker compose down
```

After CI is added in Phase 3, every PR should pass the pipeline before merge.

## License

Specify your preferred open-source license (for example MIT) when you publish the repository.
