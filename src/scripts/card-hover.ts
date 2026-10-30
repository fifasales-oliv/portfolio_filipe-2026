// Card hover, site-wide (after dousanmiao.com): the card under the pointer swells 2% and every
// other card on the page eases a few pixels away from it — more for close neighbours, less for
// far ones (inverse distance) — so the board seems to make room. Styles live in global.css.
//
// Mark any card with `data-card`. Mouse/trackpad only; skipped for reduced motion.

const MAX_PUSH = 22; // px, cap for the nearest neighbours

export function initCardHover() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canHover || reduced) return;

  const cards = [...document.querySelectorAll<HTMLElement>("[data-card]")];
  if (cards.length === 0) return;

  let active: HTMLElement | null = null;

  // Layout centre of a card, ignoring the offset we've applied ourselves
  const centre = (card: HTMLElement) => {
    const rect = card.getBoundingClientRect();
    const x = parseFloat(card.style.getPropertyValue("--card-x")) || 0;
    const y = parseFloat(card.style.getPropertyValue("--card-y")) || 0;
    return { x: rect.left + rect.width / 2 - x, y: rect.top + rect.height / 2 - y };
  };

  const settle = () => {
    active = null;
    cards.forEach((card) => {
      card.classList.remove("is-card-hover");
      card.style.setProperty("--card-x", "0px");
      card.style.setProperty("--card-y", "0px");
    });
  };

  const focusOn = (target: HTMLElement) => {
    if (active === target) return;
    active = target;

    // Push strength scales with the page width so the feel matches across screen sizes
    const strength = document.documentElement.clientWidth * 2;
    const from = centre(target);

    cards.forEach((card) => {
      if (card === target) {
        card.classList.add("is-card-hover");
        card.style.setProperty("--card-x", "0px");
        card.style.setProperty("--card-y", "0px");
        return;
      }

      card.classList.remove("is-card-hover");
      const to = centre(card);
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const distance = Math.hypot(dx, dy) || 1;
      const push = Math.min(MAX_PUSH, strength / distance);
      card.style.setProperty("--card-x", `${((dx / distance) * push).toFixed(2)}px`);
      card.style.setProperty("--card-y", `${((dy / distance) * push).toFixed(2)}px`);
    });
  };

  cards.forEach((card) => {
    card.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") focusOn(card);
    });
    card.addEventListener("pointerleave", (event) => {
      if (event.pointerType !== "mouse" || active !== card) return;
      // Moving straight onto another card hands over without a reset in between
      const next = (event.relatedTarget as Element | null)?.closest<HTMLElement>("[data-card]");
      if (next && cards.includes(next)) focusOn(next);
      else settle();
    });
    card.addEventListener("focusin", () => {
      if (card.matches(":focus-within")) focusOn(card);
    });
    card.addEventListener("focusout", (event) => {
      const next = (event.relatedTarget as Element | null)?.closest<HTMLElement>("[data-card]");
      if (next && cards.includes(next)) focusOn(next);
      else settle();
    });
  });
}
