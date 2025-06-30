const form = document.querySelector('.order-color-button');
const container = document.querySelector('.order-title').closest('.container');
const basePath = '/assets/img/order/';

form.addEventListener('change', e => {
  if (e.target.name === 'color') {
    const selectedColor = e.target.value;
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
      <source
        srcset="${basePath}${selectedColor}-desktop.webp 1x, ${basePath}${selectedColor}-desktop@2x.webp 2x"
        media="(min-width: 1440px)"
      />
      <source
        srcset="${basePath}${selectedColor}-tablet.webp 1x, ${basePath}${selectedColor}-tablet@2x.webp 2x"
        media="(min-width: 768px)"
      />
      <source
        srcset="${basePath}${selectedColor}-mobile.webp 1x, ${basePath}${selectedColor}-mobile@2x.webp 2x"
        media="(max-width: 480px)"
      />
      <img
        src="${basePath}${selectedColor}-mobile.webp"
        alt="Headphones Order"
        class="order-image"
      />
    `;

      const title = container.querySelector('.order-title');
      container.insertBefore(picture, title.nextSibling);
      requestAnimationFrame(() => {
        const newImg = picture.querySelector('img');
        newImg.classList.remove('fade-out');
        newImg.classList.add('fade-in');
      });
    }, 400);
  }
});
