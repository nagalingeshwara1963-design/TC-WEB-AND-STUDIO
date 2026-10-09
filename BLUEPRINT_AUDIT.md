# TC Web & Studio: Blueprint Audit

## Important Findings
- **Alignment:** The seven foundational documents are well-aligned. The strategy (static-first, lightweight) directly supports the business goals of performance, SEO, and maintainability.
- **Content Dependency:** The project relies heavily on content (portfolio assets, translations, finalized brand assets) which are currently unavailable. The architecture must robustly handle placeholder or missing content without breaking the build.

## Confirmed Requirements
- **Tech Stack:** Astro, TypeScript, Tailwind CSS.
- **Architecture:** Static-first, minimal client-side JavaScript, file-based content management (Astro Content Collections).
- **Internationalization:** English (primary), Kannada, Hindi.
- **Service Categories:** Brand & Design, Social & Growth, Websites & Search, Films & Photography, Pre-Wedding (isolated).
- **Hosting:** Cloudflare Pages via GitHub continuous deployment.

## Decisions That Remain Provisional
- **Brand Identity:** Exact business name spelling, logo, color palette (accent color), and official typography.
- **Translations:** Content for Kannada and Hindi is pending.
- **Portfolio Media:** Authentic images/videos and client permissions are missing.

## Conflicting Requirements & Recommended Resolutions
- **Conflict:** The desire for a fully functional multi-lingual site vs. the reality that translations are unreviewed and pending.
  - **Resolution:** Implement the i18n routing structure (e.g., `/en/`, `/kn/`, `/hi/`) but only populate the English routes initially. Fallback mechanisms or "Coming Soon" flags should be used for Kannada and Hindi to prevent generating unreviewed content.
- **Conflict:** The need for a visual CMS vs. the decision to use file-based editing initially.
  - **Resolution:** Strictly use Astro Content Collections. This enforces a strict schema for frontmatter. If a visual CMS (like Decap or Sanity) is added later, the structured Markdown will be much easier to migrate than hardcoded HTML.
