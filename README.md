# TECHNOVA 2K26

National Level Inter College Symposium — ISTE Student Chapter, CSI College of Engineering (Autonomous), Ketti, Ooty, The Nilgiris – 643215.

**24th & 25th September 2026 · Thursday & Friday**
*Igniting Innovation, Inspire Excellence*

---

## Putting it online

No build step, no installation. It is plain HTML, CSS and JavaScript.

### GitHub Pages

1. Create a repository and upload every file in this folder, keeping the folder structure.
2. Repository → **Settings → Pages**.
3. Source: **Deploy from a branch** · Branch: **main** · Folder: **/ (root)** → Save.
4. Your site appears at `https://<your-username>.github.io/<repository-name>/` in a minute or two.

The `.nojekyll` file is already included so GitHub serves every folder as-is.

### Anywhere else

Drag this folder onto Netlify, or upload it to any web host's public folder. To view it on your own
computer, open `index.html` in a browser.

---

## Files

```
index.html              the page itself
css/styles.css          the whole design system
js/script.js            data, routing and interactions
assets/
  poster.jpg            the official poster
  qr.png                registration QR, cut from that poster
  favicon.png
  hero-bg.jpg           hero artwork
  hero-bg-soft.jpg      the fixed backdrop behind every section
  logos/                college crest (round + plain) and the ISTE mark
  banners/              Technical Events / Non-Technical Events panels
  events/               the eight event photographs
  events/art/           fallback artwork under each photo
  campus/               campus illustrations
```

---

## Changing things

Everything you are likely to edit lives at the top of `js/script.js`.

| What | Where |
| --- | --- |
| Dates, venue, registration link, countdown | `SITE` |
| Campus coordinates for the map | `GEO` |
| Events — names, blurbs, overviews | `EVENTS` |
| Rules for each event | `RULES` |
| Rules shown on every event page | `GENERAL_RULES` |
| Co-ordinators and leadership | `CONTACTS`, `LEADERSHIP` |
| Ticker lines | `TICKER` |
| Photographs | `PHOTOS` |

**Registration** — `SITE.REGISTRATION_URL` holds the Google Form. Every *Register now* button and the
QR code open it. Empty it and those controls show a "registration opens soon" message instead of
breaking.

**Swapping a picture** — drop a new file over the old one in `assets/`, same name. Nothing else changes.

**Moving the date** — change `SITE.dates` and `SITE.COUNTDOWN_TARGET`, then the dates written into
`index.html` (hero, countdown heading, poster panel, footer).

**A bracketed subtitle** — an event may carry a `sub` field, shown in brackets under its name.
ThinkTech uses it for *Paper Presentation*.

---

## How it behaves

- The page opens on the hero alone. **Explore** unfolds the rest and glides to About.
- Each event track stays closed until its card in *Explore the arena* is opened.
- Event pages live at `#/events/cad`, `#/events/circuit-x`, and so on — eight in total, each with its
  own rules, the general rules, team size and timing.
- The poster opens fullscreen with zoom; the QR opens the registration form.
- Phone numbers dial, the college crest opens csice.edu.in, the ISTE mark opens isteonline.org.
- Motion respects `prefers-reduced-motion`.

---

## A note on the rules

Event rules were transcribed from the ISTE symposium rules document.

- **ThinkTech (Paper Presentation)** has no rules of its own yet. The rules document carries a *Speed
  Debugging* event instead, which is a different thing, so nothing was applied to ThinkTech. Its page
  shows the general rules and says event rules are coming. Add them to `RULES.thinktech` in
  `js/script.js` when you have them.
- **Tale Trigger** uses the rules the document lists under *One Line, One Story* — the same event under
  a different name. Worth confirming with your organisers.
