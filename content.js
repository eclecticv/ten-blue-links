/*
 * Heading-text-based section hiding. CSS handles fast paint;
 * this catches sections whose class names rotate (Google ships changes
 * roughly monthly). Matches headings, walks up to the section container,
 * sets display:none. MutationObserver re-runs on late-injected nodes.
 */

const HIDE_HEADINGS = new Set([
  'Discussions and forums',
  'Forums',
  'Videos',
  'Short videos',
  'People also ask',
  'People also search for',
  'Related searches',
  'Top stories',
  'Things to know',
  'Things to consider',
  'Shopping results',
  'AI Overview',
  'From sources across the web',
]);

const STOP_IDS = new Set(['center_col', 'rcnt', 'main', 'search', 'rso']);

function findSection(el) {
  let cur = el;
  while (cur && cur.parentElement) {
    if (cur.matches?.('g-section-with-header, [data-async-context]')) return cur;
    const p = cur.parentElement;
    if (STOP_IDS.has(p.id) || p.tagName === 'BODY') return cur;
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
    if (HIDE_HEADINGS.has(text)) hide(findSection(h));
  });

  document.querySelectorAll(
    '[data-subtree="aio"], [data-attrid*="GenerativeAI"], #m-x-content'
  ).forEach(el => hide(findSection(el)));
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
