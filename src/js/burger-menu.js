import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const menuBtn = document.querySelector('.js-open-menu');
const menuClose = document.querySelector('.js-close-menu');
const menu = document.querySelector('.js-menu-container');

menuBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  menuBtn.setAttribute('aria-expanded', 'true');
  disableBodyScroll(document.body);
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  enableBodyScroll(document.body);
});

const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    enableBodyScroll(document.body);
  });
});
