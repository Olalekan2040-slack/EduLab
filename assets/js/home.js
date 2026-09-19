// ── Home page only: hero parallax, 3D card tilt

document.addEventListener('DOMContentLoaded', () => {
  // Parallax hero mesh
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const m = document.querySelector('.hero-mesh');
    if (m) m.style.transform = `translateY(${y * .3}px)`;
  });

  // 3D card mouse tilt
  const c3 = document.getElementById('card3d');
  if (c3) {
    c3.parentElement.addEventListener('mousemove', e => {
      const r = c3.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - .5) * 20;
      const y = ((e.clientY - r.top) / r.height - .5) * -14;
      c3.style.animation = 'none';
      c3.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });
    c3.parentElement.addEventListener('mouseleave', () => {
      c3.style.animation = 'floatCard 7s ease-in-out infinite';
      c3.style.transform = '';
    });
  }
});
