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
