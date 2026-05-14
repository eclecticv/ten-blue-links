/*
 * Structural allowlist: hide sections that don't contain an organic result.
 *
 * Google obfuscates and rotates class names every few weeks, but h3.LC20lb
 * (organic-result title class) is load-bearing for screen readers and has
 * survived a decade unchanged. Use it as the keystone: anything that's a
 * "section" (has a heading) but contains zero h3.LC20lb is noise.
 *
 * No heading-text list to maintain. New Google widgets get hidden automatically
 * as long as they don't smuggle in h3.LC20lb elements.
 */

const ORGANIC = 'h3.LC20lb';
const KEEP_NAV = 'a[id^="pnnext"], a[id^="pnprev"]';
const STOP_IDS = new Set(['center_col', 'rcnt', 'main', 'search', 'rso', 'botstuff', 'cnt']);

const SKIP_HEADING_IN = 'h3.LC20lb, table, [role="navigation"], [role="dialog"]';

// Walk up from a heading to the smallest ancestor that doesn't drag in
// organic results or pagination from outside the current subtree.
function findSection(el) {
  let cur = el;
  while (cur && cur.parentElement) {
    const p = cur.parentElement;
    if (STOP_IDS.has(p.id) || p.tagName === 'BODY') return cur;
    for (const o of p.querySelectorAll(ORGANIC)) if (!cur.contains(o)) return cur;
    for (const n of p.querySelectorAll(KEEP_NAV)) if (!cur.contains(n)) return cur;
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
  // Stable selectors with known semantics — fast-path before the walk-up.
  document.querySelectorAll(
    '#tads, #bottomads, [data-text-ad], div.M8OgIe, #m-x-content'
  ).forEach(hide);

  // Structural allowlist: any heading whose enclosing section has neither
  // organic results nor pagination is noise.
  document.querySelectorAll('[role="heading"], h2.bNg8Rb').forEach(h => {
    if (h.matches(ORGANIC)) return;
    if (h.closest(SKIP_HEADING_IN)) return;
    const section = findSection(h);
    if (!section || section.dataset.tbl === '1') return;
    if (section.querySelector(ORGANIC)) return;
    if (section.querySelector(KEEP_NAV)) return;
    hide(section);
  });
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
