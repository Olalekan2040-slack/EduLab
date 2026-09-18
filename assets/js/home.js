// ── Home page only: hero parallax, 3D card tilt, application form

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

// ── Application form
function doSub() {
  const ids = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'];
  let ok = true;
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.style.borderColor = '#EF4444'; ok = false;
      el.addEventListener('input', () => el.style.borderColor = '', { once: true });
    }
  });
  if (!ok) { alert('Please complete all required fields (*).'); return; }

  const values = {
    school: document.getElementById('f1').value.trim(),
    principal: document.getElementById('f2').value.trim(),
    phone: document.getElementById('f3').value.trim(),
    email: document.getElementById('f4').value.trim(),
    state: document.getElementById('f5').value.trim(),
    city: document.getElementById('f6').value.trim(),
    type: document.getElementById('f7').value.trim(),
    population: document.getElementById('f8').value.trim(),
    lab: document.getElementById('f9').value.trim(),
    notes: document.getElementById('f10').value.trim()
  };

  const subject = encodeURIComponent(`EduLab Partnership Application - ${values.school}`);
  const body = encodeURIComponent(
    `School Name: ${values.school}\n` +
    `Proprietor / Principal: ${values.principal}\n` +
    `Phone Number: ${values.phone}\n` +
    `Email Address: ${values.email}\n` +
    `State: ${values.state}\n` +
    `City / LGA: ${values.city}\n` +
    `School Type: ${values.type}\n` +
    `Student Population: ${values.population}\n` +
    `ICT Lab Status: ${values.lab}\n\n` +
    `Additional Notes:\n${values.notes}`
  );

  window.location.href = `mailto:olalekanquadri58@gmail.com?subject=${subject}&body=${body}`;

  document.getElementById('appform').style.display = 'none';
  const s = document.getElementById('fsuccess'); s.style.display = 'block';
  window.scrollTo({ top: document.getElementById('apply').offsetTop - 80, behavior: 'smooth' });
}
