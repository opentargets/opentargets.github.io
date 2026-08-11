# AGENTS.md

Open Targets corporate website: a Jekyll static site (Ruby 3.3.5, `github-pages` gem) deployed on Netlify. Content-heavy; there are **no tests, no linter, no CI** (no `.github/`). Verification = a clean `jekyll build`. Most changes are new Markdown content items, not code.

This branch (`hc-website-test`) is a site redesign: the history timeline and hackathon sections were removed and timeline entries were folded into `_news/`.

## Local dev

```
bundle install
bundle exec jekyll serve --watch   # http://localhost:4000
```

- The build **requires network access**: `jekyll-get-json` in `_config.yml` fetches two Ghost data sources at build time — `ghost_api_response` (blog posts, consumed in `index.html`) and `ghost_api_releases` (release-notes tag, consumed in `pages/science.html`). An offline build fails or silently drops those sections.
- Use `bundle exec`, never a bare `jekyll` — the `github-pages` gem pins the Jekyll version.

## Content model

- All collections live under **`my_collections/`** (`collections_dir: my_collections`), in `_name/` dirs: `_news`, `_resources`, `_jobs`, and team dirs (`_informatics_team`, `_strategy_operations_team`, `_executive_leadership_team`). Do NOT create top-level `_collection` dirs.
- Only `news` has `output: true` (generates standalone pages); the rest are data-only.
- Copy a template from **`my_collections/_templates/`** (news-item, press-release, person, job-ad, resources-page-item) rather than inventing front matter. The `history-timeline-entry` and `sab-member` templates are orphaned (their collections were removed) — don't use them.
- **News items require `category` and `summary` front matter.** The news page (`pages/news.html`) filters cards into tabs by the exact `category` string: `research highlight`, `consortium news`, `platform news`, or `news`. Cards render `summary`, not the body.
- News items with a `link:` front-matter value render as external-link cards; without one they render as internal pages (use `layout: press_release`). Press releases may add `image_caption`, `publication`, `publication_link` (rendered by `_layouts/press_release.html`).
- **News images live in `assets/img/news/`** (resolved from `image_filename` as `/assets/img/news/{{ image_filename }}`). Placeholder: `assets/img/news/open_targets_logo_news_item_placeholder.png`.
- `future: true` is set in `_config.yml`, so future-dated posts render.
- Styling is SCSS compiled by `assets/css/main.scss` (imports `_sass/main.scss`, `home`, `news`, `science`, `404`, `bootstrap-overrides`, `contact`). News/gallery markup uses `ot-*` classes (e.g. `ot-news-item`, `ot-news-gallery`) defined in `_sass/news.scss`. Bootstrap 4 loads from CDN.

## Environment & deploy

- `netlify.toml` sets `JEKYLL_ENV=production`; `_layouts/default.html` injects Google Tag Manager only when `jekyll.environment == 'production'`. **Exception: `_layouts/press_release.html` injects GTM unconditionally**, so news article pages include it even in local builds.
- PRs get Netlify deploy previews automatically. Merging to **`main` does NOT auto-deploy to production** — production deploys are locked and must be unlocked manually in the Netlify UI (README says "master", but the actual branch is `main`).

## Data files & removed sections

- `_data/*.csv` (research-publications, associated-publications, review-articles) feed the publications pages via `_includes/*.html`. Keep CSV header rows intact.
- The history timeline and hackathon were removed on this branch: no `_history_timeline/`, `pages/history.html`, `pages/hackathon.html`, `_data/hackathon/`, or `_includes/timeline.html`. `_config.yml` still lists the `history_timeline` collection and some team collections that have no content dirs — stale but harmless. `_layouts/hackathon.html` is an orphaned leftover.
