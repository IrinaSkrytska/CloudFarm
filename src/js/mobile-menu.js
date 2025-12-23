const header = document.querySelector('.header');
const menuBtn = document.querySelector('.dropdown');
const menu = document.getElementById('mobile-menu');
const overlay = document.querySelector('.overlay');

function openMenu() {
  header.classList.add('is-menu-open');
  document.body.classList.add('is-menu-open');
  menuBtn.setAttribute('aria-expanded', 'true');

  menu.hidden = false;
  overlay.hidden = false;
}

function closeMenu() {
  header.classList.remove('is-menu-open');
  document.body.classList.remove('is-menu-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menu.hidden = true;
  overlay.hidden = true;
}

menuBtn.addEventListener('click', () => {
  const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);
