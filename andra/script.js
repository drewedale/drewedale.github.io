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

const orb = document.querySelector('.cursor-orb');
if (orb && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    orb.style.left = `${event.clientX}px`;
    orb.style.top = `${event.clientY}px`;
  }, { passive: true });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const showsFeed = document.querySelector('.shows-feed');
const showsEmpty = document.querySelector('#shows-empty');

if (showsFeed && showsEmpty) {
  const syncShowsState = () => {
    const hasEvents = Boolean(showsFeed.querySelector('.bit-event'));
    showsEmpty.hidden = hasEvents;
  };

  const showsObserver = new MutationObserver(syncShowsState);
  showsObserver.observe(showsFeed, { childList: true, subtree: true });
  syncShowsState();
}
