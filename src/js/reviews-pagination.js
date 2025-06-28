const paginationButtons = document.querySelectorAll('.pagination-btn');
const slides = document.querySelectorAll('.reviews-item');

// активуємо перший слайд на старті
slides[0].classList.add('active');

paginationButtons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    // зняти is-active з усіх кнопок
    paginationButtons.forEach(b => b.classList.remove('is-active'));
    // додати до поточної
    btn.classList.add('is-active');

    // приховати всі слайди
    slides.forEach(slide => slide.classList.remove('active'));
    // показати активний слайд
    slides[idx].classList.add('active');
  });
});
