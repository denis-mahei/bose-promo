import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const menuBtn = document.querySelector('.js-open-menu');
const menu = document.querySelector('.js-menu-container');

menu.addEventListener('transitionend', () => {
  if (!menu.classList.contains('is-open')) {
    menu.style.visibility = 'hidden';
    menu.style.pointerEvents = 'none';
  }
});

menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;

  menuBtn.setAttribute('aria-expanded', !expanded);
  if (!expanded) {
    menu.style.visibility = 'visible';
    menu.style.pointerEvents = 'auto';
    menu.classList.add('is-open');
  } else {
    menu.classList.remove('is-open');
  }
});
