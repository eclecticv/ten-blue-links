/*
 * Heading-text-based section hiding. CSS handles fast paint;
 * this catches sections whose class names rotate. Walks from a matched
 * heading up to the smallest ancestor that doesn't yet contain organic
 * results outside its subtree — that's the section boundary.
 */

const HIDE_HEADINGS = new Set([
  'AI Overview',
  'Discussions and forums',
  'Forums',
  'Videos',
  'Short videos',
  'People also ask',
  'People also search for',
  'Top stories',
  'Top sites',
  'Things to know',
  'Things to consider',
  'Shopping results',
  'Sponsored',
  'Sponsored products',
  'Popular products',
  'In stores nearby',
  'Local Results',
  'Places',
  'Map',
  'More places',
]);

const HIDE_PREFIXES = [
  'Deals on ',
  'Top deals on ',
  'Shop ',
  'See more on ',
];

const STOP_IDS = new Set(['center_col', 'rcnt', 'main', 'search', 'rso', 'botstuff', 'cnt']);

const ORGANIC = 'h3.LC20lb';

function findSection(el) {
  let cur = el;
  while (cur && cur.parentElement) {
    const p = cur.parentElement;
    if (STOP_IDS.has(p.id) || p.tagName === 'BODY') return cur;
    const organics = p.querySelectorAll(ORGANIC);
    for (const o of organics) {
      if (!cur.contains(o)) return cur;
    }
    cur = p;
  }
  return null;
}

function hide(el) {
  if (!el || el.dataset.tbl === '1') return;
  el.style.setProperty('display', 'none', 'important');
  el.dataset.tbl = '1';
}

function purge() {
  document.querySelectorAll('h2, h3, [role="heading"]').forEach(h => {
    const text = (h.textContent || '').trim();
    if (HIDE_HEADINGS.has(text) || HIDE_PREFIXES.some(p => text.startsWith(p))) {
      hide(findSection(h));
    }
  });

  document.querySelectorAll(
    '#m-x-content, div.M8OgIe, [jscontroller="AkrxPe"], [data-subtree="aio"]'
  ).forEach(el => hide(findSection(el)));

  document.querySelectorAll('#tads, #bottomads, [data-text-ad]').forEach(hide);
}

let queued = false;
function schedule() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { queued = false; purge(); });
}

purge();
new MutationObserver(schedule).observe(
  document.documentElement,
  { childList: true, subtree: true }
);
