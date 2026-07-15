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
- `js/` — `footer.js` (footer divider wrap detection)

## Cache-busting

`site.css` and `footer.js` are linked with a `?v=N` query string in every HTML
page (e.g. `css/site.css?v=1`). Static hosts (this repo's local dev server,
Cloudflare Pages) don't send cache-control headers, so browsers can cache
these two files independently of the HTML that references them — a visitor
can end up with new HTML paired with an old cached CSS/JS, which silently
breaks things (mismatched class names, stale logic) with no error.

**Whenever you edit `css/site.css` or `js/footer.js`, bump `?v=N` to `N+1`
everywhere it's referenced** (all four HTML pages):

```
grep -rl 'site.css?v=\|footer.js?v=' *.html | xargs sed -i '' 's/?v=1/?v=2/g'
```

Skip this and returning visitors may see a broken mix of old and new code
until their cache naturally expires.

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
