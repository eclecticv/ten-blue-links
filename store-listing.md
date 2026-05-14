# Chrome Web Store — Ten Blue Links v0.3.3

Developer profile to match the existing **And/or Labs Inc.** account
(same as Slop or Not!): andorlabs.ca, EU trader, Calgary AB address.

---

## Name
Ten Blue Links — Hide AI Overview & Clutter

(43/45 chars — distinctive brand at the start, keywords trailing for Chrome Web Store discovery. The brand can be shortened back to "Ten Blue Links" post-launch once organic install velocity is established.)

## Short description (132 char max)
Removes AI Overviews, ads, and clutter from Google Search. Hides everything between you and the ten blue links — automatically.

(122 chars)

## Category
Productivity

## Language
English (US)

---

## Detailed description

Removes AI Overviews, ads, and clutter from Google Search. Hides everything between you and the ten blue links — automatically.

Google Search used to be ten blue links. Now, before the first organic result, you scroll past an AI Overview, three sponsored listings, a People Also Ask box, a knowledge panel, "Things to know," a Discussions block, an AI Mode tab, "Popular products," and on commercial queries, a Local Results map and a left-side "Refine results" filter panel. The result you actually wanted is somewhere down there.

This extension quietly removes everything between you and the results. There is no settings panel to configure, no toolbar popup, no account, no telemetry. Install it once and the next time you search, you see ten blue links.

**What it hides**
- AI Overviews and AI Mode entry points
- Sponsored results, shopping ads, and inline ad blocks
- People Also Ask
- Discussions and forums
- Knowledge panel and right sidebar
- "Things to know" widgets
- Popular products, Deals on X, In stores nearby, Local Results
- Article thumbnails next to organic results (favicons remain for context)
- People also search for
- The shopping refinement chip bar and left-rail filter panel on commercial queries

**What it keeps**
- The organic search results
- Search filter tabs (All, Images, Videos, Maps, News, Shopping)
- Pagination
- The query box

The extension uses a structural rule rather than a list of section names: any section without an organic search result is treated as noise. New widgets Google ships get hidden automatically, without an update.

When you click through to a real article instead of reading an AI summary, the publisher gets the page view, the ad impression, and the chance to earn a subscriber. The open web depends on readers reaching the source.

Ten Blue Links is not an attack on AI or on Google. It is an attempt to give readers a search experience that values links to real pages, and a way for publishers to keep meeting their readers.

---

## Permissions

This extension uses content scripts that run only on Google Search pages (`www.google.com/search*`). It declares no additional permissions. It has no background script, no `storage`, no `tabs`, no network access. It cannot read or modify any other site.

---

## Privacy practices (submission form answers)

**Single purpose:**
Ten Blue Links has one purpose — hide non-result content (AI Overviews, sponsored listings, knowledge panel, People Also Ask, discussions, videos, products, and local pack widgets) from Google Search result pages, leaving only the organic search results, filter tabs, and pagination visible.

**Justification for host permissions (`www.google.com`):**
Required to inject the content script that performs the hiding.

**Data collection:** None.

**Data sharing:** None.

**Data declarations (three checkboxes in the submission form, all confirmed):**
- Not being sold to third parties, outside of the approved use cases
- Not being used or transferred for purposes that are unrelated to the item's core functionality
- Not being used or transferred to determine creditworthiness or for lending purposes

**Privacy policy URL:** `https://eclecticv.github.io/ten-blue-links/privacy/` ✅ live

---

## Privacy policy (host this somewhere reachable)

Ten Blue Links does not collect, store, transmit, or share any data. The extension runs entirely in your browser. It has no background script, no network requests, no analytics, and no account system. There is nothing to opt out of because there is nothing to opt in to.

The only resource the extension accesses is the Google Search page you are currently viewing, which it modifies locally in your browser to hide non-result content. The modified DOM never leaves your machine.

Contact: vishveshwar.jatain@gmail.com

---

## Developer info (matches existing And/or Labs Inc. profile)

- **Developer name:** And/or Labs Inc.
- **Website:** https://andorlabs.ca
- **Email:** vishveshwar.jatain@gmail.com
- **Address:** 221 27 Ave NW, Calgary, AB T2M 2H5, Canada
- **Trader status:** Trader (EU disclosure)

---

## Screenshots (1280×800, 1–5 required)

Capture from your real Chrome with Ten Blue Links installed. Suggested:

1. **Hero before/after on a commercial query** (e.g., `best running shoes`)
   - Caption: *"Same query. One change."*
2. **Information query** (e.g., `how to buy shoes`)
   - Caption: *"Ten blue links, the way they were."*
3. **Shopping query** (e.g., `best bikes 2026`) — shows refinement chip bar + sidebar removed
   - Caption: *"Refine, filter, repeat — gone."*
4. **News query** (e.g., `cpi report`)
   - Caption: *"Works on every query type."*
5. **Permissions screen**
   - Chrome extension details panel showing only `www.google.com`
   - Caption: *"One permission. One purpose."*

---

## Promo tiles (already generated)

- `promo-small.png` — 440×280
- `promo-marquee.png` — 1400×560

---

## Listing keywords / tags

- google search
- ai overview
- declutter
- minimal
- privacy
- no settings
- search results
- supports publishers

---

## Support URL
`https://github.com/eclecticv/ten-blue-links/issues` ✅ live

## Homepage URL
`https://eclecticv.github.io/ten-blue-links/` ✅ live

---

## Version history copy (for the listing changelog)

### v0.3.2 — Shopping refinements
Hides the chip bar (Mountain / Road / Hybrid / …) and left-side "Refine results" panel that Google overlays on product queries.

### v0.3.1 — Layout
Reclaims the empty right-rail space and widens the results column to a comfortable reading width without floating it to the middle of the page.

### v0.3.0 — Featured-image thumbnails, PAA siblings
Removes article-result thumbnails (favicons kept). Catches the People Also Ask accordions on the A/B variant where they ship without a section header.

### v0.2.0 — Self-adaptive
Replaced the per-section name list with a structural rule: any section without an organic search result is hidden. New Google widgets are handled automatically.

### v0.1.0 — Initial release
AI Overviews, sponsored results, People Also Ask, and knowledge panel hidden by default.

---

## Submission checklist

- [x] Manifest v3, version 0.3.2
- [x] Icons at 16, 48, 128 px
- [x] Zip bundle: `ten-blue-links-v0.3.2.zip` (10 KB, 6 files)
- [x] Promo tile 440×280
- [x] Promo tile 1400×560 (optional, for marquee)
- [x] Detailed description copy
- [x] Permissions justification
- [x] Single purpose statement
- [x] **3 screenshots at 1280×800** in `screenshots/` (more can be added)
- [x] **Privacy policy hosted** at `https://eclecticv.github.io/ten-blue-links/privacy/`
- [x] **Support URL** at `https://github.com/eclecticv/ten-blue-links/issues`
- [x] **Public repo** at `https://github.com/eclecticv/ten-blue-links`
- [ ] Use existing **And/or Labs Inc.** developer account
- [ ] Pay one-time **$5 developer fee** if not already paid (Slop or Not implies you have)
