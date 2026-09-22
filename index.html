const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

function paintPath() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const progress = max > 0 ? scrollY / max : 0;
  document.querySelector('.zen-path')?.style.setProperty('--scroll-progress', progress.toFixed(4));
}
addEventListener('scroll', paintPath, { passive: true });
addEventListener('resize', paintPath);
paintPath();

document.querySelectorAll('.focus-list details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('.focus-list details[open]').forEach(other => { if (other !== item) other.removeAttribute('open'); });
  });
});

const toggle = document.querySelector('#language-toggle');
toggle?.addEventListener('click', () => {
  const english = document.documentElement.lang !== 'en';
  document.documentElement.lang = english ? 'en' : 'de';
  document.querySelectorAll('[data-de][data-en]').forEach(node => node.innerHTML = node.dataset[english ? 'en' : 'de']);
  toggle.textContent = english ? 'DE' : 'EN';
  toggle.setAttribute('aria-label', english ? 'Zur deutschen Sprache wechseln' : 'Switch to English');
});
