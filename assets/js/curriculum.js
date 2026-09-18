// ── Class detail page: term tab switching
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.term-tab');
  const panels = document.querySelectorAll('.term-panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.term;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.dataset.term === target));
    });
  });
});
