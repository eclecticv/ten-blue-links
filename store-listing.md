# Chrome Web Store — Ten Blue Links v0.2.0

## Name
Ten Blue Links

(13/45 chars)

## Short description
Removes AI Overviews, ads, and clutter from Google Search. No settings, no toggles — the SERP you remember.

(112/132 chars)

## Category
Productivity

## Language
English (US)

---

## Detailed description

Remember when a Google search was ten blue links?

These days, before you reach the first organic result, you scroll past an AI Overview, three sponsored listings, a "People also ask" box, a knowledge panel, "Things to know," a Discussions block, an AI Mode tab, "Popular products," and (on commercial queries) a Local Results map. The result you actually wanted is somewhere down there.

Ten Blue Links quietly removes everything between you and the results.

**What it hides**
- AI Overviews and AI Mode entry points
- Sponsored results, shopping ads, and inline ad blocks
- People Also Ask
- Discussions and forums
- Knowledge panel / right sidebar
- Featured snippet cards
- "Things to know" and "Things to consider" widgets
- Popular products, Deals on X, In stores nearby, Local Results (Places + Map)
- People also search for

**What it keeps**
- The ten blue links
- Search filter tabs (All, Images, Videos, Maps, News, Shopping)
- Pagination
- The query box, of course

**What it doesn't do**
- No settings panel
- No toolbar popup
- No telemetry, no account, no upsell
- No network requests beyond the page you're already loading
- No permissions beyond `www.google.com` — it cannot read or modify any other site

**Why this exists**

Two reasons.

One — convenience. The job of a search engine is to find pages on the web. Every pixel above the first result is a tax on that job. This extension removes the tax.

Two — supporting publishers. When you click through to a real article instead of reading an AI Overview that summarized it, the publisher gets the page view, the ad impression, and the chance to earn a subscriber. The open web depends on readers reaching the source. Ten Blue Links exists because the source is worth a click.

**How it's different from other AI Overview blockers**

Most extensions in this category target the AI Overview specifically and ship a settings panel for everything else. Ten Blue Links takes one opinionated stance — "show me search results, hide everything else" — and removes the toggles entirely. The product decision *is* the value prop.

Under the hood, the extension uses a structural rule rather than a denylist of section names. That means when Google adds a new widget next quarter, the extension hides it automatically — no update required on your end.

**Single purpose**

Ten Blue Links has one purpose: hide non-result content from Google Search pages so users can see the organic results without visual interference. It does not block ads on other websites, modify other search engines, or interact with any page outside `www.google.com/search`.

**Open source**

The entire extension is ~70 lines of JavaScript and a small stylesheet. You can read the source on GitHub.

---

## Permission justifications

This extension declares no permissions beyond `host_permissions` for `www.google.com`. It uses content scripts only — no background script, no `storage`, no `tabs`, no `webRequest`. It cannot read or modify any other site, cannot make outbound network requests, and stores nothing.

The single `host_permissions` entry is required to inject the content script that performs the hiding.

---

## Privacy policy

**Data collected**: None.

**Data shared with third parties**: None.

**Data sold**: None.

Ten Blue Links runs entirely in your browser. It does not collect, store, transmit, or share any data — not search queries, not click history, not anonymous usage statistics, nothing. It has no background script, no network requests, no analytics SDK, and no account system. There is nothing to opt out of because there is nothing to opt in to.

The only resource it accesses is the Google Search page you are currently viewing, which it modifies locally in your browser to hide non-result content. That modification happens via CSS and JavaScript injected by the extension; the modified DOM never leaves your machine.

---

## Single purpose statement

(For Chrome Web Store submission form)

This extension hides non-result content (AI Overviews, sponsored listings, knowledge panels, "People also ask," discussions, videos, products, and local pack widgets) from Google Search result pages, leaving only the organic search results, filter tabs, and pagination visible.

---

## Screenshots (1280×800, 1–5 required)

Capture in a clean browser window, no bookmarks bar, default Chrome chrome. Suggested set:

1. **Hero: before/after split on a commercial query** (e.g., `best running shoes`)
   - Left: stock SERP showing AI Overview + Popular products + Deals + Local pack + organics buried
   - Right: same query with extension active — only the organic results visible
   - Caption: "Same query. One change."

2. **Information query** (e.g., `how to buy shoes`)
   - Stock SERP with AI Overview, PAA, Discussions, Videos
   - Cleaned version
   - Caption: "Ten blue links, the way they were."

3. **News query** (e.g., `cpi report`)
   - Demonstrates "Top stories" handling
   - Caption: "Works on every query type."

4. **The settings page that isn't**
   - Empty Chrome extension details page or a styled card that just says "No settings. By design."
   - Caption: "Install it. Forget it."

5. **Privacy / permissions screen**
   - Chrome extension permissions panel showing only `www.google.com`
   - Caption: "One permission. One purpose."

---

## Promo tiles (optional, recommended for discoverability)

### Small promo tile (440×280)

Background: white (#ffffff)
Icon: the three-blue-lines icon, centered-left
Headline (right of icon, navy #0f172a, 32px bold): "Ten Blue Links"
Subhead (16px regular, slate #475569): "Google Search, decluttered."

### Marquee promo tile (1400×560, only used if Google features the extension)

Same layout, larger. Optional second line: "AI Overviews, ads, and noise — hidden. Real results — kept."

---

## Listing keywords / tags (Chrome Web Store discovery)

Suggested (use what's allowed, the form may cap at 5–10):

- google search
- ai overview
- block ai
- remove ads
- declutter
- minimal
- privacy
- no settings
- search results
- organic results

---

## Support URL

Suggested: GitHub repo issues page. The Web Store requires a working support URL.

## Homepage URL (optional)

Suggested: andorlabs.ca or a dedicated GitHub Pages site for the extension.

---

## Version history copy (for the listing changelog)

### v0.2.0 — Self-adaptive
Replaced the per-section heading list with a structural rule: any section without an organic search result is hidden. The extension now handles new Google widgets automatically, without an update.

### v0.1.3 — Commercial SERP coverage
Added handling for "Popular products," "Deals on …", "In stores nearby," "Local Results," "Places."

### v0.1.0 — Initial release
AI Overviews, sponsored results, PAA, and knowledge panel hidden by default.
