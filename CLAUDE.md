# EverNest Consultants website — SEO automation handoff

Context: this repo (Nightmares4u/EverNest-Website) is the live site for
evernestconsultants.com. A Cowork session has been running a weekly SEO
audit/fix cycle and needs the following finished. Pending items, in order:

## 1. Commit and push pending SEO fixes (already made, uncommitted)
Four files under `evernest/src/app/(pages)/immigration/` (express-entry,
usa-work-permit, h1b, j1) already have BreadcrumbList/FAQPage JSON-LD added,
matching the pattern in `immigration/[country]/page.tsx`. Also
`scripts/fetch_search_console.py` was added (see #2). Just needs:
```
git add -A
git commit -m "SEO: add JSON-LD to immigration pages; add Search Console fetch script"
git push
```

## 2. Create the GitHub Actions workflow (blocked from remote-write, needs manual creation)
Create `.github/workflows/seo-search-console.yml`:

```yaml
name: Weekly Search Console pull

on:
  schedule:
    - cron: "0 15 * * 1"
  workflow_dispatch: {}

permissions:
  contents: write

jobs:
  fetch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install dependencies
        run: pip install google-api-python-client google-auth

      - name: Fetch Search Console data
        env:
          GSC_SERVICE_ACCOUNT_JSON: ${{ secrets.GSC_SERVICE_ACCOUNT_JSON }}
        run: python scripts/fetch_search_console.py

      - name: Commit report
        run: |
          git config user.name "seo-bot"
          git config user.email "actions@github.com"
          git add seo-data/search-console
          git diff --cached --quiet || git commit -m "Weekly Search Console data pull"
          git push
```

`scripts/fetch_search_console.py` already exists and reads its credential
from the `GSC_SERVICE_ACCOUNT_JSON` env var — do not hardcode any key into
this repo.

## 3. One-time Google Cloud + GitHub setup (user does this, not Claude)
- Google Cloud: create/use a project, enable the "Search Console API",
  create a service account, download its JSON key.
- Search Console (search.google.com/search-console, property
  https://www.evernestconsultants.com/) → Settings → Users and permissions
  → add the service account's email as a user.
- GitHub repo → Settings → Secrets and variables → Actions → New repository
  secret → name `GSC_SERVICE_ACCOUNT_JSON` → paste the full key JSON.

## 4. Known issue: legacy 301 redirects and DNS
Already resolved — apex domain (no-www) now correctly redirects to www via
Vercel, confirmed live. No further action.

## 5. Outstanding content gap (not yet done)
FAQ content exists on only 1 of 17 study-visa country pages (usa). Italy,
Canada, UK, Germany, Australia, France have no FAQ block yet — this blocks
FAQPage rich-result schema on those pages even though the code path
supports it (`buildFaqSchema` fires automatically once `pageData.faq` is
populated in `evernest/src/data/study-visas.ts`).

## Ongoing tracking
Weekly SEO audit reports (from a separate Cowork scheduled task) are logged
in Google Drive, folder "EverNest Consultants — SEO Tracking". Once the
GitHub Action above is live, `seo-data/search-console/latest.json` in this
repo becomes the source of truth for real Search Console numbers.
