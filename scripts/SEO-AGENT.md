# Weekly SEO agent runbook

The scheduled agent reads this file at the start of every run and follows it
exactly. It commits and pushes to `main`, which deploys to the live site via
Vercel — so every rule below exists to keep a bad run small, obvious, and
reversible in one command.

## Non-negotiables

1. **One commit per run.** Everything the run produces — code changes, report,
   audit JSON — goes in a single commit whose subject starts with `SEO auto:`.
   That makes any run revertable with `git revert <sha>` and greppable with
   `git log --grep "^SEO auto:"`.
2. **Never push a red build.** Typecheck, lint, build, and the SEO audit must
   all pass before pushing. If any fail, revert the code changes, keep the
   report, and push only the report documenting what failed and why.
3. **Path allowlist.** Only these may be edited:
   - `evernest/src/data/**` (page content)
   - `evernest/src/app/**` (metadata, schema, page structure)
   - `evernest/src/components/**` (only to fix a flagged defect)
   - `seo-data/**` (reports and audit trail)

   Never touch: `.github/**`, `scripts/**`, `next.config.ts`, `package.json`,
   `middleware.ts`, redirects, robots/sitemap logic, anything auth or
   credential related. Never touch DNS, domain, email, or Vercel settings.
4. **Bounded scope.** At most 5 distinct fixes per run. A small diff is a
   reviewable diff. Anything beyond that goes in the report's backlog section
   for a human to approve.
5. **No invented facts.** This site gives visa and immigration guidance, where
   a wrong number is a real harm to a real applicant. Fee amounts, processing
   times, IELTS bands, work-hour limits, and eligibility rules may only be
   restated from what the page already says or from an official government
   source that you cite in the report. If a figure looks wrong or is missing,
   write it up as a finding — do not guess a replacement.

## Each run

1. `git pull` on `main`.
2. Build and audit to capture the starting state:
   ```
   cd evernest && npm ci && npm run build
   nohup npx next start -p 3900 > /tmp/next.log 2>&1 &
   # wait for readiness, then:
   node scripts/seo-audit.mjs --base http://localhost:3900 \
     --json seo-data/audits/$(date +%F)-before.json
   ```
3. Read `seo-data/search-console/latest.json` if present. Pages with
   impressions but near-zero CTR are the highest-value targets: the page ranks
   and nobody clicks, which usually means the title or description is the
   problem, not the content.
4. Fix at most 5 things, highest value first:
   - Audit **errors** always come first.
   - Then audit warnings.
   - Then content gaps (a destination missing scholarships, costs, or intakes
     that comparable destinations have).
5. Re-run typecheck, lint, build, and the audit, writing
   `seo-data/audits/$(date +%F)-after.json`.
6. Write `seo-data/reports/$(date +%F).md` using the template below.
7. Commit everything as one `SEO auto:` commit and push.

## Report template

```markdown
# SEO run — YYYY-MM-DD

**Audit:** N errors / M warnings → N' errors / M' warnings
**Commit:** <sha>
**Revert this run:** `git revert <sha>`

## Changed
- `path/to/file.ts` — what changed and why. Source for any factual claim.

## Verified
- typecheck / lint / build / audit: pass|fail

## Not done (needs a human)
- Anything skipped for the 5-fix cap, anything factually uncertain, anything
  outside the path allowlist.
```

## If something looks wrong later

```bash
git log --grep "^SEO auto:" --oneline        # every agent run
git show <sha>                               # exactly what one run changed
git revert <sha>                             # undo one run cleanly
diff <(jq . seo-data/audits/DATE-before.json) \
     <(jq . seo-data/audits/DATE-after.json)  # what the run claimed to fix
```

## Known open items

- `cyprus.heroDesc` in `evernest/src/data/study-visas.ts` claims Cyprus is
  "part of the Schengen zone". Cyprus is an EU member but is not in Schengen.
  Flagged 2026-09-07; needs a human to confirm the replacement wording.
