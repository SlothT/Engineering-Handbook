# Engineering Handbook

**Engineering OS — The Open Engineering Study System**

Engineering OS is an open-source learning system designed for software engineers and computer science students.

It combines structured engineering documentation, diagrams, learning roadmaps, and interview preparation into a single knowledge system built using MkDocs.

The goal is to create a **long-term engineering reference similar to professional engineering handbooks**, but fully open, searchable, and continuously improving.

---

## Features

- Structured **Computer Science documentation**
- **MkDocs + Material for MkDocs** documentation system
- Interactive **Mermaid diagrams**
- Engineering concept explanations with examples
- Searchable documentation
- Dark mode support
- Interview preparation resources
- Beginner-friendly contribution workflow

---

## Tech Stack

- MkDocs
- Material for MkDocs
- Markdown
- Mermaid diagrams
- GitHub Pages
- Docker

---

## Quick Start

Run the documentation site locally using Docker:

```bash
docker compose up --build
```

The site will be available at:

```
http://localhost:8000
```

---

## Local Development

Engineering OS can be run locally using **Docker (recommended)** or **Python**.

---

## Run with Docker (Recommended)

Using Docker ensures a consistent environment and avoids dependency conflicts.

### Prerequisites

- Docker Desktop or Docker Engine

### Start the documentation server

```bash
docker compose up --build
```

The documentation will be available at:

```
http://localhost:8000
```

### Stop the server

```bash
docker compose down
```

---

## Run with Python (Alternative)

If you prefer running the project without Docker.

### Prerequisites

- Python 3.10+
- pip

### Setup virtual environment

```bash
python -m venv .venv
```

Activate the environment:

**Windows (PowerShell)**

```bash
.venv\Scripts\Activate.ps1
```

**macOS / Linux**

```bash
source .venv/bin/activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Run the documentation server

```bash
mkdocs serve
```

If `mkdocs` is not available in your PATH:

```bash
python -m mkdocs serve
```

Open the URL shown in the terminal.

### Build the static site

```bash
mkdocs build
```

The generated site will be inside the `site/` directory.

---

## Project Structure

```
mkdocs.yml              # Site configuration
docs/                   # Documentation content
docs/stylesheets/       # Custom CSS
docs/diagrams/          # Diagram assets
.github/workflows/      # CI/CD pipelines
docker-compose.yml      # Docker setup
```

---

## CI / Deployment

The project uses **GitHub Actions** to automatically build and deploy the documentation.

Workflow overview:

- Pull Requests trigger a documentation build check
- If the build succeeds, the PR can be merged
- Merges to `main` automatically deploy the documentation to **GitHub Pages**

---

## Contributing

Contributions are welcome.

Engineering OS is **actively being developed and improved**, and contributions from the community are encouraged.

You can contribute by:

- adding new engineering topics
- improving explanations
- adding diagrams
- fixing typos
- improving examples

Even small improvements are appreciated.

---

## Beginner Contribution Workflow

If you are new to Git or open source, follow these steps.

### 1. Fork the repository

Click **Fork** on GitHub to create your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/engineering-os.git
cd engineering-os
```

### 3. Create a new branch

```bash
git checkout main
git pull origin main
git checkout -b feature/<short-name>
```

### 4. Make your changes

Edit documentation, add explanations, or improve examples.

### 5. Commit your changes

```bash
git add .
git commit -m "Describe your change"
```

### 6. Push your branch

```bash
git push origin feature/<short-name>
```

### 7. Open a Pull Request

Go to GitHub and open a **Pull Request** from your branch to `main`.

After review, the changes can be merged into the project.

---

## Project Status

Engineering OS is an **actively evolving project**.

The documentation structure, topics, and learning resources are continuously improving as the project grows.

Feedback, ideas, and contributions are always welcome.

---

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.
