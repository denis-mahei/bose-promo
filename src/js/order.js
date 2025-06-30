const imageData = {
  black: {
    desktop: '/assets/img/order/black-desktop.webp',
    desktop2x: '/assets/img/order/black-desktop@2x.webp',
    tablet: '/assets/img/order/black-tablet.webp',
    tablet2x: '/assets/img/order/black-tablet@2x.webp',
    mobile: '/assets/img/order/black-mobile.webp',
    mobile2x: '/assets/img/order/black-mobile@2x.webp',
  },
  white: {
    desktop: '/assets/img/order/white-desktop.webp',
    desktop2x: '/assets/img/order/white-desktop@2x.webp',
    tablet: '/assets/img/order/white-tablet.webp',
    tablet2x: '/assets/img/order/white-tablet@2x.webp',
    mobile: '/assets/img/order/white-mobile.webp',
    mobile2x: '/assets/img/order/white-mobile@2x.webp',
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

      picture.innerHTML = `
        <source srcset="${image.desktop} 1x, ${image.desktop2x} 2x" media="(min-width: 1440px)" />
        <source srcset="${image.tablet} 1x, ${image.tablet2x} 2x" media="(min-width: 768px)" />
        <source srcset="${image.mobile} 1x, ${image.mobile2x} 2x" media="(max-width: 480px)" />
        <img src="${image.mobile}" alt="Headphones Order" class="order-image fade-out" />
      `;

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
