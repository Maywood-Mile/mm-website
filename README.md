# Maywood Mile — website

Static site for maywoodmile.com. Plain HTML/CSS/JS, no build step. Tokens and
fonts copied from [mm-design-system](https://github.com/Maywood-Mile/mm-design-system);
if the brand system changes, re-copy `tokens/*.css` and `assets/` from there.

## Structure

- `index.html` — Home
- `approach.html` — My Approach
- `contact.html` — Contact
- `ai.html` — structured overview page for LLM/AI readers
- `llms.txt` — root-level machine-readable summary (emerging convention)
- `css/` — `fonts.css`, `tokens-*.css` (colors/typography/spacing, copied verbatim), `site.css` (layout/components)
- `assets/` — fonts (ttf) and logo marks (svg/png), copied from the design system

## Local dev

No build step. Serve the directory and open it:

```
npx serve .
# or
python3 -m http.server 8080
```

## Deploy

Hosted on Cloudflare Pages, connected to the `main` branch of this repo — push to `main` to deploy.
No build command, output directory is the repo root.
