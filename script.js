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
  toggle.textContent = english ? 'Deutsch' : 'English'; 
  toggle.setAttribute('aria-label', english ? 'Zur deutschen Sprache wechseln' : 'Switch to English');
});

const menuToggle = document.querySelector('#menu-toggle');
const mainNavigation = document.querySelector('#main-navigation');

if (menuToggle && mainNavigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNavigation.classList.toggle('is-open', !isOpen);
  });

  mainNavigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNavigation.classList.remove('is-open');
    });
  });
}

function updateExperiencePath() {
  const list = document.querySelector('.experience-list');
  if (!list) return;

  const rect = list.getBoundingClientRect();
  const viewportPoint = window.innerHeight * 0.58;
  const progress = Math.max(
    0,
    Math.min(100, ((viewportPoint - rect.top) / rect.height) * 100)
  );

  list.style.setProperty('--experience-progress', `${progress}%`);
}

addEventListener('scroll', updateExperiencePath, { passive: true });
addEventListener('resize', updateExperiencePath);
updateExperiencePath();

// Enhanced section transition detection
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Add active class to navigation link
      const id = entry.target.id;
      if (id) {
        document.querySelectorAll('.main-nav a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    }
  });
}, {
  threshold: 0.3
});

// Observe screen-sections for fade-in animations
document.querySelectorAll('.screen-section')
  .forEach(el => observer.observe(el));

// Observe all sections for nav highlighting
document.querySelectorAll('[id]').forEach(el => {
  if (el.id && el.classList.contains('section')) {
    observer.observe(el);
  }
});

// Keyboard navigation: Arrow keys to jump between sections
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    const sections = Array.from(document.querySelectorAll('.section, .hero, .contact'));
    const scrollThreshold = window.innerHeight * 0.5;
    
    let currentIndex = sections.findIndex(section => {
      const rect = section.getBoundingClientRect();
      return rect.top >= -scrollThreshold && rect.top <= scrollThreshold;
    });

    if (currentIndex === -1) currentIndex = 0;

    if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
      e.preventDefault();
      sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
      e.preventDefault();
      sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
