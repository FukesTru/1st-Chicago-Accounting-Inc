# 1st Chicago Accounting — Design Brainstorm

## Three Approaches Considered

**Approach A — Civic Navy (Probability: 0.04)**
Deep navy, white, and a warm gold accent. Traditional financial authority. Feels established but risks feeling dated.

**Approach B — Slate & Steel (Probability: 0.07)**
Charcoal, cool gray, and a steel-blue accent. Ultra-clean, corporate. Risk: feels too cold and impersonal for a founder-led firm.

**Approach C — Deep Navy + Sky Cyan + Cream (Probability: 0.06)**
Anchored in the existing logo's cyan-blue (#2BACE2) and deep navy, warmed with off-white/cream sections and a subtle slate texture. Feels modern, trustworthy, personal, and premium — matching Brad's "experienced advisor" positioning.

---

## Chosen Approach: C — Deep Navy + Sky Cyan + Cream

### Design Movement
Modern Financial Advisory — rooted in the "quiet luxury" aesthetic of high-end professional services firms. Inspired by boutique wealth management and top-tier CPA firm websites, not generic tax prep chains.

### Core Principles
1. **Founder-first credibility** — Brad's face, credentials, and story are structural elements, not decorative additions.
2. **Asymmetric, editorial layouts** — sections alternate between left-heavy and right-heavy compositions to avoid a "template" feel.
3. **Controlled restraint** — generous whitespace, limited color use, and no decorative clutter. Every element earns its place.
4. **Conversion architecture** — every section has a natural next step. CTAs are confident, not aggressive.

### Color Philosophy
The logo's cyan-blue (#2BACE2) is the brand's signature color — it signals clarity, trust, and forward-thinking. Deep navy (#0F2240) grounds the design with authority. Cream/off-white (#F8F6F1) sections add warmth and prevent the site from feeling cold. Charcoal (#2D3748) handles body text. A muted gold (#B8963E) is used sparingly for accents and highlights — never for backgrounds.

### Layout Paradigm
Asymmetric editorial grid. Hero sections use a split-screen approach (text left, image right). Service sections use staggered card grids. The About section uses a large-format photo with overlapping text block. No full-width centered layouts except for the hero headline.

### Signature Elements
1. **Thin horizontal rule with cyan accent** — used as a section separator and under headings to reinforce brand color.
2. **Credential badge strip** — "CPA | MBA | EA | Since 1997" displayed as a horizontal trust bar near the hero and on the About page.
3. **Dark navy CTA sections** — full-width navy background sections used for mid-page and bottom CTAs, creating strong visual contrast.

### Interaction Philosophy
Subtle and purposeful. Hover states on service cards lift slightly with a soft shadow. CTA buttons have a gentle scale-up on hover. Scroll-triggered fade-ins for section content. Nothing distracting or gimmicky.

### Animation
- Entrance: `opacity: 0 → 1` + `translateY(16px → 0)` over 400ms ease-out, staggered 60ms per element.
- Hover on cards: `translateY(-4px)` + `box-shadow` increase over 200ms ease-out.
- CTA buttons: `scale(1.02)` on hover, `scale(0.97)` on active.
- Nav: Transparent over hero, transitions to `bg-white/95 backdrop-blur` on scroll.

### Typography System
- **Display/Headings**: Playfair Display (serif) — authoritative, editorial, premium. Used for H1 and H2 only.
- **Body/UI**: Inter (sans-serif) — clean, readable, modern. Used for all body copy, nav, labels, and CTAs.
- **Hierarchy**: H1 48–64px bold, H2 32–40px semibold, H3 20–24px semibold, Body 16–18px regular.
- **Letter spacing**: Headings -0.02em for tightness; uppercase labels +0.1em for legibility.

### Brand Essence
**1st Chicago Accounting: The CPA who thinks like a CFO, built for small business owners who want more than just tax filing.**
Personality: Experienced. Practical. Trustworthy.

### Brand Voice
Headlines are direct and benefit-driven. CTAs are confident without being pushy. Microcopy is clear and human.
- Example headline: "Your taxes are filed. Your profits are not."
- Example CTA: "Schedule a Consultation with Brad"
- Banned phrases: "Welcome to our website", "Get started today", "We're here to help", "One-stop shop"

### Wordmark & Logo
Use the existing 1st Chicago Accounting logo as-is. The "1ST" mark in cyan is distinctive and ownable. The tagline "ACCOUNTING AND BUSINESS ADVISORS" is retained in the footer only; the header uses just the logo mark.

### Signature Brand Color
**#2BACE2** — the cyan-blue from the logo. Used for all primary CTAs, accent lines, icon highlights, and hover states.

---

## Style Decisions
- Playfair Display for all H1/H2 headings; Inter for everything else.
- Navy CTA sections use white text and a cyan-bordered button.
- Service cards use a white background with a thin cyan left-border accent on hover.
- Brad's headshot always appears on a light or neutral background — never on dark navy.
- The Profits Driven book section uses a dark teal/navy background to match the book cover's color.
- Location pages follow the same layout as service pages but with city-specific copy and schema markup.
- No emojis anywhere on the site.
- Contact form is the primary CTA destination (no live booking link available).

## Post-Review Style Amendments

- Cyan (#2BACE2) is a precision accent for primary CTA buttons, thin horizontal rules on dark backgrounds, and key icons on dark backgrounds only. Large fields of cyan are rare and secondary to navy and cream.
- Header logo: use the existing logo mark cleanly in the masthead without a boxed or padded container; reserve the full logo/tagline lockup for the footer only.
- Section labels on light backgrounds: `text-xs font-semibold uppercase tracking-widest text-gray-400`. On dark navy backgrounds only: use cyan.
- Accent dividers on light sections: use navy (oklch(0.22 0.06 250)), not cyan.
- Service/card icons on light backgrounds: use navy background, not cyan.
- Services page uses editorial advisory rhythm with numbered rows for core advisory services, and clean cards for compliance services.
- Card hover states: use `hover:shadow-md hover:-translate-y-1` rather than `hover:border-cyan`.
- Timeline connector dots and lines: use navy at low opacity.
