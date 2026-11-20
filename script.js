// Small interactions — no framework, no subscription, no build tools needed.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

for (const link of menu.querySelectorAll('a')) {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  });
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({target, isIntersecting}) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
        observer.unobserve(target);
      }
    });
  }, {threshold: 0.09});
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('is-visible'));
}

document.getElementById('year').textContent = String(new Date().getFullYear());
