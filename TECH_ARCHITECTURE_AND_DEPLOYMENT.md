# TC Web & Studio: Tech Architecture & Deployment

## Proposed Technology Stack
- **Framework:** Astro (latest stable release). Ideal for content-heavy, static-first websites.
- **Language:** TypeScript for type safety and maintainable code.
- **Styling:** Tailwind CSS for a scalable, token-based design system.
- **Interactivity:** Minimal client-side JavaScript (Vanilla JS or minimal framework components if absolutely necessary).
- **Markup:** Semantic, accessible HTML.

## Content Structure
- **Content Collections (Astro):** Used to strictly type and organize Markdown/MDX files for:
  - Portfolio Projects
  - Blog / Insights Articles
  - Services definitions
  - Team Profiles
- This separates presentation from content, allowing founders to edit markdown files easily.

## GitHub Source Workflow
- Source code hosted in a private GitHub repository.
- File-based editing flow initially: founders can edit Markdown files directly in GitHub or via a local IDE (Antigravity).

## Deployment Plan
- **Host:** Cloudflare Pages (Free Tier).
- **Workflow:** Git-based continuous deployment. Pushing to the `main` branch automatically builds and deploys the static site to Cloudflare edge nodes globally.
- **Domain:** Plan for a custom domain (e.g., `tcwebstudio.com`). DNS will be managed via Cloudflare.

## Contact Form & Notification Options
- **Recommendation:** Use a form-handling service with a generous free tier (e.g., Formspree, Web3Forms, or Netlify Forms if hosting were Netlify). Given Cloudflare Pages, Web3Forms or Formspree are ideal.
- **WhatsApp:** Direct `wa.me` links configured with pre-filled messages.

## Booking Options
- Embed or link to Cal.com or Calendly (Free tier) for discovery calls.

## Analytics and SEO Setup
- **Analytics:** Cloudflare Web Analytics (privacy-first, free) or Google Analytics 4 (GA4).
- **SEO:** Astro integrations for generating `sitemap.xml`, `robots.txt`, and Open Graph meta tags automatically based on frontmatter.

## CMS Options and Limitations
- **Current Phase:** Git-based Markdown editing.
- **Future Phase:** Decoupled visual CMS (e.g., Sanity, Decap CMS, or Storyblok).
- *Limitation:* A visual CMS requires setup, schema mapping, and potentially paid tiers if usage scales. File-based editing avoids these costs and complexity initially.

## Free-Tier Limitations
- Cloudflare Pages: Limit on concurrent builds and total builds per month (usually 500/month, highly sufficient).
- Form services: Monthly submission limits (e.g., 250 submissions/month on Web3Forms free tier).

## Security Considerations
- No databases or servers to maintain (Static Site).
- Environment variables will be used for API keys (e.g., Form submissions).
- **No secrets in source code.**

## Future Client Dashboard Considerations
- **Architecture Impact:** Moving from a static site to one requiring authentication (e.g., Firebase Auth, Supabase) and a database.
- **Recommendation:** Keep this strictly out of scope for the current marketing site. When needed, build it as a separate sub-application (e.g., `clients.tcwebstudio.com`).
