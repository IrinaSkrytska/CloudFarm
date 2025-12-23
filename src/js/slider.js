const slider = document.querySelector('.hero__section');
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');

let index = 0;
let startX = 0;
let autoSlide;

function show(i) {
  index = (i + slides.length) % slides.length;

  slides.forEach((s, n) => s.classList.toggle('is-active', n === index));
  dots.forEach((d, n) => d.classList.toggle('is-active', n === index));
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    show(index + 1);
  }, 6000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

dots.forEach((dot, i) => {
  dot.onclick = () => {
    stopAutoSlide();
    show(i);
    startAutoSlide();
  };
});

slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  stopAutoSlide();
});

slider.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      show(index + 1);
    } else {
      show(index - 1);
    }
  }

  startAutoSlide();
});

show(0);
startAutoSlide();
