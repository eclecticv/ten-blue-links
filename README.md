# Ten Blue Links

A Chrome extension that removes AI Overviews, ads, and clutter from Google Search. No settings, no toggles — just the ten blue links.

Built by [And/or Labs Inc.](https://andorlabs.ca)

## What it hides

- AI Overviews and AI Mode entry points
- Sponsored results, shopping ads, and inline ad blocks
- People Also Ask
- Discussions and forums
- Knowledge panel and right sidebar
- "Things to know" widgets
- Popular products, Deals on X, In stores nearby, Local Results
- Article thumbnails next to organic results (favicons remain)
- People also search for
- The shopping refinement chip bar and left "Refine results" panel

## What it keeps

- Organic search results
- Search filter tabs (All, Images, Videos, Maps, News, Shopping)
- Pagination
- The query box

## How it works

The extension uses a structural rule rather than a list of section names: any section without an organic search result is treated as noise. When Google ships a new widget, it gets hidden automatically — no update required.

Total surface area: ~180 lines (`manifest.json` + `hide.css` + `content.js`). Pure CSS and DOM manipulation. No background script. No network requests. No `storage`. No permissions beyond `www.google.com`.

## Install

### From the Chrome Web Store

Coming soon.

### Unpacked (development)

```sh
git clone https://github.com/eclecticv/ten-blue-links.git
```

1. Open `chrome://extensions`
2. Toggle **Developer mode** (top right)
3. Click **Load unpacked** and select the cloned folder
4. Search anything on Google

## Maintenance

Google rotates obfuscated class names every 4–12 weeks. When a noise widget reappears:

1. Open the SERP where it's leaking
2. Inspect the element to find the section's heading text or wrapper class
3. The structural rule in `content.js` usually catches new sections automatically. If it doesn't, add the heading text to the relevant scan or the wrapper class to `hide.css`.

The two canary queries used during development:

- `google.com/search?q=how+to+buy+shoes` — informational (AI Overview, PAA, Discussions, Videos)
- `google.com/search?q=best+bikes+2026` — commercial (chip bar, sidebar, Popular products, Deals, Local Results)

## Privacy

[Privacy Policy](https://eclecticv.github.io/ten-blue-links/privacy/) — short version: the extension does not collect, store, transmit, or share any data.

## License

[MIT](LICENSE)
