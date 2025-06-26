import './js/burger-menu.js';

const animatedElements = document.querySelectorAll('.anim-on-scroll');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

animatedElements.forEach(el => observer.observe(el));
