// ── Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const hburg = document.querySelector('.hburg');
  const navLinks = document.querySelector('.nav-links');
  if (hburg && navLinks) {
    hburg.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // ── Scroll reveal
  const revEls = document.querySelectorAll('.rev');
  if (revEls.length) {
    const robs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('vis');
    }), { threshold: .08 });
    revEls.forEach(el => robs.observe(el));
  }
});
