# Dr. Michal Peles-Almagor Site Scaffold

Multilingual Astro scaffold with GitHub Pages deployment and a Git-based CMS editing layer.

## Features

- Language support: English (`en`), Hebrew (`he`), Arabic (`ar`), German (`de`)
- RTL support for Hebrew and Arabic
- Content collections with Markdown pages and subpages
- Language-aware routing (`/en`, `/he`, `/ar`, `/de`)
- `.pages.yml` config for Pages CMS
- GitHub Actions workflow for GitHub Pages deployment

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Content model

All editable pages live in:

- `src/content/pages/en`
- `src/content/pages/he`
- `src/content/pages/ar`
- `src/content/pages/de`

Each page uses frontmatter:

```yaml
lang: en|he|ar|de
path: home | research | research/themes
title: Page title
navTitle: Optional short nav label
summary: Optional intro
showInNav: true|false
order: number
updatedAt: "YYYY-MM-DD"
```

### Subpages

Use `path` values with `/` to create nested pages, for example:

- `research/themes`
- `teaching/course-a`

## CMS editing (Pages CMS)

1. Push this repository to GitHub.
2. Open [app.pagescms.org](https://app.pagescms.org).
3. Install the Pages CMS GitHub App.
4. Open this repo and edit content using `.pages.yml`.

## GitHub Pages deployment

The workflow file is at `.github/workflows/deploy.yml`.

Before first deploy, set the final production URL in `astro.config.mjs`:

```js
site: "https://<your-github-username>.github.io"
```

If you later use a custom domain, update this `site` value accordingly.
