/**
 * Page-wide motion: scroll reveals and the hero parallax.
 * Everything here switches off under prefers-reduced-motion.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Scroll reveal ---------- */
// Elements with [data-reveal] rise 16px and fade in when they enter the
// viewport. `--reveal-delay` on the element staggers them.

function initReveal() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!items.length) return;

  const settle = (el: HTMLElement) => {
    el.classList.add('is-revealed');
    // After the reveal ends, mark it settled so hover transitions take over
    const delay = parseFloat(getComputedStyle(el).getPropertyValue('--reveal-delay')) || 0;
    window.setTimeout(() => el.classList.add('is-settled'), delay + 750);
  };

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    items.forEach(settle);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          settle(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- Parallax ---------- */
// [data-parallax="0.15"] moves the element down by 15% of the scroll
// distance, so it travels at 0.85x the page speed.

function initParallax() {
  const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!layers.length) return;

  let frame = 0;
  let enabled = !reduceMotion.matches;

  const render = () => {
    frame = 0;
    const y = window.scrollY;
    layers.forEach((layer) => {
      const host = layer.parentElement;
      if (!host) return;
      // Only move while the host is on screen
      if (y > host.offsetTop + host.offsetHeight) return;
      const factor = enabled ? parseFloat(layer.dataset.parallax ?? '0') : 0;
      layer.style.transform = factor ? `translate3d(0, ${(y * factor).toFixed(1)}px, 0)` : '';
    });
  };

  const request = () => {
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  reduceMotion.addEventListener('change', (e) => {
    enabled = !e.matches;
    request();
  });
  render();
}

initReveal();
initParallax();
