# act Work&Up — Design context

## Product

act Work&Up is a Brazilian Portuguese marketplace prototype connecting people and businesses looking for services with independent professionals and companies. Its initial focus is Indaiatuba and nearby cities, with online services available beyond the region.

The primary user groups are:

- Customers comparing local or online services, contacting providers, and reviewing a payment flow.
- Independent professionals and companies presenting services and managing requests.

The current app is a browser-based prototype, implemented with plain HTML, CSS, and JavaScript. Catalog data, conversations, registration, and payment confirmation are local demonstrations; do not describe them as persistent, authenticated, or real transactions.

## Experience goals

- Make it quick to find and compare a service by name, category, modality, and starting price.
- Make provider identity, location or modality, rating, scope, and contact options easy to scan.
- Keep the customer journey legible: explore → review provider profile → message or proceed to payment.
- Give providers a clear path to register and showcase their services.
- Build trust through calm presentation, clear next steps, and honest status and payment messaging.

## Design principles

1. **Trust before spectacle.** Use a clean marketplace layout, clear service details, and restrained visual effects.
2. **Make the next step obvious.** Use the established purple primary action for the main action on a page; keep secondary and back actions visually quieter.
3. **Keep information scannable.** Use headings, short descriptions, metadata, tags, and consistent cards rather than dense prose.
4. **Use warmth with restraint.** Purple is the brand anchor; gold is an accent for highlights, ratings, and complementary calls to action.
5. **Be explicit and truthful.** Preserve Brazilian Portuguese copy and local currency formats. Label simulated interactions as demonstrations.
6. **Design for narrow screens.** Preserve the same hierarchy and core actions on mobile; do not rely on hover or wide layouts.

## Visual system

### Color

Use the CSS custom properties in `style.css` as the source of truth:

- Brand purple: `--purple` (`#5101D4`); darker interactive state: `--purple-dark` (`#39009B`).
- Purple backgrounds and borders: `--purple-soft`, `--purple-tint`, and `--purple-border`.
- Gold accent: `--yellow` (`#E39F21`), with `--yellow-soft`, `--yellow-border`, and `--yellow-ink` for supporting uses.
- Page background: `--bg` (`#F7F6FA`); cards use white; text uses `--ink` (`#191522`) and `--muted` (`#706B7B`).
- Use semantic success, warning, and danger tokens rather than reusing brand colors for status.

Prefer the existing tokens over new one-off values. Keep body text and interactive elements readable against their backgrounds.

### Typography

- Body and interface text: DM Sans, with system sans-serif fallbacks (`--font-body`).
- Headings: Fraunces, falling back to Georgia (`--font-heading`), for a warmer editorial contrast.
- Use the existing responsive `h1` sizing, compact `h2`/`h3` hierarchy, and small bold purple eyebrow labels.
- Keep marketing headings conversational and concise; use plain, action-oriented labels in forms and controls.

### Layout and surfaces

- Center content with `.container` and the `--content` maximum width.
- Use the `--space-*` scale for spacing and the existing responsive grids before introducing new layout rules.
- Use white panels/cards on the soft page background, subtle borders, the shared radius tokens, and the two restrained shadow tokens.
- Keep gradients and decorative glow out of the interface. Vary the home service feature tiles while keeping the searchable catalog easy to compare.
- Service imagery is a supporting visual, not a substitute for title, provider, modality, and price information.
- Follow the existing responsive breakpoints at 1000px, 680px, and 420px.

### Components and interaction

- Reuse `.btn.primary`, `.btn.outline`, `.btn.gold-btn`, `.inline-action`, `.back-link`, `.panel`, `.service-card`, `.tag`, `.avatar`, and `.status-pill`.
- Primary actions are purple with white text; outline actions are secondary; gold buttons are reserved for complementary emphasis.
- Use the existing screen navigation via `data-screen`; the app starts on login and switches screens without a framework/router.
- Use inline SVG icons for interface symbols; do not use emoji as controls or status indicators.
- Preserve visible keyboard focus, native form validation, clear labels, and accessible status announcements. Decorative inline SVG icons should remain hidden from assistive technology; controls need meaningful names.
- Keep motion limited to subtle hover/focus feedback and brief section entry; respect `prefers-reduced-motion`.
- Keep interactive states clear for favorites, dialogs, filtering, messaging, and payment status.

## Product structure

- **Login and registration:** login, account-type selection, personal/autonomous registration, and company registration.
- **Inicio:** marketplace introduction, search, popular services, professionals, trust cues, and provider call to action.
- **Explorar:** searchable, filterable, sortable service catalog.
- **Perfil profissional:** selected service and provider details, portfolio, inclusions, FAQ, reviews, contact, and contract action.
- **Mensagens:** provider conversations and message composer.
- **Pagamento:** order summary, Pix demonstration, and payment-status feedback.
- **Meus serviços:** customer order examples and provider service management entry point.
- **Configurações:** profile, account, notification, and help sections.

The site header links to Inicio, Explorar, Meus serviços, Mensagens, and Configurações. Authentication screens hide the app header and footer.

## Content and implementation constraints

- User-facing copy is Brazilian Portuguese (`pt-BR`). Keep accents, idioms, and labels consistent with the existing interface.
- Use Brazilian Real formatting (`R$`) and the existing local context (Indaiatuba and nearby cities).
- Keep changes compatible with the current no-framework HTML/CSS/JavaScript structure; no Tailwind setup or package manifest exists in this repository, so do not imply or add Tailwind as an installed dependency.
- Keep the current files and patterns as the implementation source of truth. This document guides design decisions; it does not authorize unrelated redesigns or imply backend capabilities.
