// ===== Tab switching =====
const tabs     = document.querySelectorAll('.nav-tab');
const sections = document.querySelectorAll('.tab-content');

function switchTab(name) {
  tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  sections.forEach(s => s.classList.toggle('active', s.id === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Nav tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

// Brand name → home
document.querySelector('.nav-brand').addEventListener('click', () => switchTab('home'));

// In-page buttons (hero CTA buttons, etc.)
document.querySelectorAll('[data-tab]').forEach(el => {
  if (el.classList.contains('nav-tab') || el.classList.contains('nav-brand')) return;
  el.addEventListener('click', () => switchTab(el.dataset.tab));
});
