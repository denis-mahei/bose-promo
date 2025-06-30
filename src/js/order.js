import blackMobile from '/assets/img/order/black-mobile.webp';
import blackMobile2x from '/assets/img/order/black-mobile@2x.webp';
import blackDesktop from '/assets/img/order/black-desktop.webp';
import blackDesktop2x from '/assets/img/order/black-desktop@2x.webp';
import blackTablet from '/assets/img/order/black-tablet.webp';
import blackTablet2x from '/assets/img/order/black-tablet@2x.webp';

import whiteMobile from '/assets/img/order/white-mobile.webp';
import whiteMobile2x from '/assets/img/order/white-mobile@2x.webp';
import whiteDesktop from '/assets/img/order/white-desktop.webp';
import whiteDesktop2x from '/assets/img/order/white-desktop@2x.webp';
import whiteTablet from '/assets/img/order/white-tablet.webp';
import whiteTablet2x from '/assets/img/order/white-tablet@2x.webp';

const imageData = {
  black: {
    desktop: blackDesktop,
    desktop2x: blackDesktop2x,
    tablet: blackTablet,
    tablet2x: blackTablet2x,
    mobile: blackMobile,
    mobile2x: blackMobile2x,
  },
  white: {
    desktop: whiteMobile,
    desktop2x: whiteMobile2x,
    tablet: whiteDesktop,
    tablet2x: whiteDesktop2x,
    mobile: whiteTablet,
    mobile2x: whiteTablet2x,
  },
};
const form = document.querySelector('.order-color-button');
const container = document.querySelector('.order-title').closest('.container');

form.addEventListener('change', e => {
  if (e.target.name === 'color') {
    const selectedColor = e.target.value;
    const image = imageData[selectedColor];
    const oldPicture = container.querySelector('picture');
    const oldImg = oldPicture.querySelector('img');

    if (oldImg) {
      oldImg.classList.add('fade-out');
    }
    setTimeout(() => {
      const existingPicture = container.querySelector('picture');
      if (existingPicture) {
        existingPicture.remove();
      }

      const picture = document.createElement('picture');
      console.log('inserting picture with paths:', image);
      picture.innerHTML = `
        <source srcset="${image.desktop} 1x, ${image.desktop2x} 2x" media="(min-width: 1440px)" />
        <source srcset="${image.tablet} 1x, ${image.tablet2x} 2x" media="(min-width: 768px)" />
        <source srcset="${image.mobile} 1x, ${image.mobile2x} 2x" media="(max-width: 480px)" />
        <img src="${image.mobile}" alt="Headphones Order" class="order-image fade-out" />
      `;
      console.log(imageData[selectedColor]);
      const title = container.querySelector('.order-title');
      container.insertBefore(picture, title.nextSibling);
      requestAnimationFrame(() => {
        const newImg = picture.querySelector('img');
        newImg.classList.remove('fade-out');
        newImg.classList.add('fade-in');

        newImg.addEventListener('transitionend', () => {
          newImg.classList.remove('fade-in');
        });
      });
    }, 400);
  }
});
