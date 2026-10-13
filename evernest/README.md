This is the production Next.js app for EverNest Consultants.

## Getting Started

Run all commands from the `evernest/` directory:

```bash
cd evernest
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app locally.

## Production Checks

Use these commands before shipping changes:

```bash
npm install
npm run lint
npm run build
```

## Vercel

Vercel should use `evernest/` as the project root for this repository.

## Contact funnel analytics

Vercel Web Analytics custom events track where leads drop off. The helper is
`src/lib/analytics.ts`; the script is loaded in `src/app/layout.tsx` via
`AnalyticsScript`.

| Event | Fires when | Properties |
| --- | --- | --- |
| `contact_page_view` | `/contact` loads | `path` |
| `contact_form_submit` | the contact form passes validation and is submitted | `path`, `source` |
| `whatsapp_open` | a WhatsApp link is opened (sticky button, contact page link, or form submit) | `path`, `source` (`sticky_button`, `contact_page`, `contact_form`) |

No PII is sent: never pass form values (name, email, phone, destination,
message) to `trackEvent`.

**Where to view:** Vercel dashboard → the project → **Analytics** → **Events**
(filter by event name, then break down by `source`). Web Analytics must be
enabled for the project, and custom events require a plan that includes them.
Events only appear on deployed Vercel builds, not local dev. Funnel:
`contact_page_view` → `contact_form_submit` → `whatsapp_open`.

The app config also pins `turbopack.root` to this directory so Next.js does not infer the wrong workspace root when multiple lockfiles exist in the parent folder.
