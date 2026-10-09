# TC Web & Studio: Build Roadmap & Acceptance Tests

## Implementation Phases
### Phase 01: Strategic Blueprint (Current)
- Workspace inspection and documentation generation.
- Founder review and approval of positioning, architecture, and design system.

### Phase 02: Setup & Foundation
- Initialise Astro + Tailwind + TypeScript repository.
- Setup GitHub repository and configure Cloudflare Pages deployment.
- Configure Design System tokens (colours, typography, spacing).

### Phase 03: Core Components & Layouts (Completed)
- [x] Build base layouts (Header, Footer, Navigation).
- [x] Develop UI components (Buttons, Cards, Forms, Typography).
- [x] Implement responsive grids.

### Phase 04: Content & Pages Integration
- Build static pages (Home, About, Services, Contact, Pre-Wedding).
- Setup Astro Content Collections.
- Integrate portfolio markdown data and blog architecture.

### Phase 05: Polish, SEO & Launch Prep
- Implement animations and transitions.
- Populate metadata, Open Graph tags, sitemap, robots.txt.
- Multi-language routing setup.

## Dependency Order
1. Finalize Brand Identity (Logo, Colours, Fonts) -> *Blocks Phase 02/03.*
2. Portfolio Assets provided -> *Blocks Phase 04.*
3. Copywriting & Translations provided -> *Blocks Phase 04/05.*

## Test Plan
### Accessibility & Responsive Checks
- Run Lighthouse / Axe DevTools audits targeting WCAG AA compliance.
- Verify keyboard navigation across all interactive elements.
- Test across devices (iOS Safari, Android Chrome, Desktop Chrome/Firefox/Safari) and viewport breakpoints.

### SEO Checks
- Validate `robots.txt` and `sitemap.xml`.
- Ensure unique `<title>` and `<meta description>` for every page.
- Check heading hierarchy (H1 -> H2 -> H3) logically on all pages.
- Verify image `alt` attributes and optimized formats (WebP/AVIF via Astro image).
- Validate Open Graph and Twitter Card tags.

### Functional Acceptance Criteria
- Contact form successfully submits and sends an email notification.
- WhatsApp links open the app with correct pre-filled text.
- Portfolio filters (if implemented) correctly sort projects.
- Language switcher correctly navigates to localized content paths (e.g., `/en/`, `/kn/`).
- Page load speed achieves 90+ on Lighthouse Performance score.

## Launch Checklist
- [ ] Founder approval of all copy and portfolio assets.
- [ ] Client permissions verified for all showcased work.
- [ ] Custom domain connected and SSL active.
- [ ] Analytics tracking scripts verified.
- [ ] 404 error page customized and working.
- [ ] Form submission endpoints secured and tested.

## Definition of Done
A feature or page is considered "Done" when it is coded, styled responsively, passes accessibility and SEO checks, contains accurate (non-placeholder) content, is merged into the `main` branch, and deploys successfully to production without errors.
