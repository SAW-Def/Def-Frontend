# DEF Software Solutions

Marketing site for DEF Software Solutions — a furniture configurator that lets
customers design, price and order personalised furniture online.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. Every page is
statically rendered; the Schedule a Call form runs through a server action.

## Running locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

| Script          | Purpose                                  |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Development server                       |
| `npm run build` | Production build                         |
| `npm run start` | Serve the production build               |
| `npm run lint`  | ESLint                                   |

## Environment

Copy `.env.example` to `.env.local` and fill in the values.

| Variable                | Purpose                                                                    |
| ----------------------- | -------------------------------------------------------------------------- |
| `CONTACT_FORM_ENDPOINT` | Where Schedule a Call submissions are POSTed as JSON (CRM webhook or mailer) |

Without the endpoint the form still validates, but tells the visitor the request
could not be sent rather than discarding it quietly.

## Structure

```
src/
  app/               Routes, server actions, sitemap and robots
  components/
    layout/          Header, footer, document shell
    ui/              Buttons, logo, icons, cards, lists
    media/           Carousel, configurator preview, device frames, video
    forms/           Schedule a Call form
  content/           Copy, navigation and image references
  lib/               Class-name and fluid-sizing helpers
public/
  icons/             Brand illustrations exported from the source artwork
  images/            Photography
```

## Layout system

The designs are drawn on a 1730px canvas with a 130px gutter, giving a 1470px
content column. `globals.css` holds that as design tokens: type sizes, radii and
gutters are `clamp()` expressions that interpolate between a 375px viewport and
the 1730px design width, so a 1730px-wide window matches the artwork exactly and
everything narrower scales proportionally.

Two utilities handle the full-bleed split sections (`shell-lead`, `shell-trail`).
They align a half-width column's inner edge to the same line as the centred
`shell` container, so text in a split section lines up with text in a normal one.

`lib/fluid.ts` builds the same clamp expression at runtime for values that come
from data, such as per-icon heights.

## Notes for content

- **Founder film** — `content/site.ts` exports `introFilmUrl`. Set it to the
  hosted video URL and the play control on Our Solution becomes an active button
  that opens the player. While it is `null` the section renders its poster
  treatment only.
- **Configurator visuals** — the platform sections render a device mock of the
  configurator interface. Once real product screenshots are available they can
  replace `components/media/ConfiguratorUI.tsx`.
- **Legal pages** — Terms & Conditions and Privacy Policy are routed and linked
  but hold holding copy until the final wording is supplied.
