const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.textContent = isOpen ? 'Menu' : 'Close';
  navigation.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = 'Menu';
    navigation.classList.remove('is-open');
  });
});

// Previously shared project links pointed to anchors on the one-page portfolio.
// Keep those links working after moving the work to dedicated pages.
const legacyProjects = {
  'reflection-room': 'engineering.html',
  'lovely-radio-domo': 'engineering.html',
  'are-you-what-they-say-you-are': 'composition-sound-design.html',
  'liv-short-film': 'composition-sound-design.html',
  'or-books-live-talk': 'engineering.html',
  'never-forget-engineering': 'engineering.html',
  'six-am-remix': 'engineering.html',
  'engineered-songs-playlist': 'engineering.html',
  'kinected-dj': 'audio-coding.html',
  'concatenative-synthesis': 'audio-coding.html',
  'matlab-audio-dsp': 'audio-coding.html',
  'fauna-of-mirrors-iii': 'audio-coding.html',
  'midi-synthesizer': 'audio-coding.html',
  'portfolio-source': 'audio-coding.html',
  'night-with-dornika': 'events.html',
  'subzero-sessions': 'events.html',
  'dornika-artist': 'artists.html',
  'second-district-releases': 'artists.html',
};

function routeOldLink() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (document.body.dataset.page === 'engineering' && id === 'are-you-what-they-say-you-are') {
    window.location.replace(`composition-sound-design.html#${encodeURIComponent(id)}`);
    return;
  }
  if (document.body.dataset.page !== 'home') return;
  const category = { 'tab-engineering': 'engineering.html', 'panel-engineering': 'engineering.html',
    'tab-coding': 'audio-coding.html', 'panel-coding': 'audio-coding.html',
    'tab-composition': 'composition-sound-design.html', 'panel-composition': 'composition-sound-design.html',
    'tab-events': 'events.html', 'panel-events': 'events.html',
    'tab-artists': 'artists.html', 'panel-artists': 'artists.html' }[id];
  if (legacyProjects[id]) window.location.replace(`${legacyProjects[id]}#${encodeURIComponent(id)}`);
  else if (category) window.location.replace(category);
  if (id === 'about' || id === 'contact') window.location.replace(`about.html#${id}`);
  if (id === 'work' || id === 'work-title') window.location.replace('#paths');
}

routeOldLink();
window.addEventListener('hashchange', routeOldLink);

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const glow = document.querySelector('.cursor-glow');
if (glow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
