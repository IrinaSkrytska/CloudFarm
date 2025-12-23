console.log("slider.js loaded");

const slider = document.querySelector(".hero__section");
const slides = document.querySelectorAll(".hero__slide");
const dots = document.querySelectorAll(".hero__dot");

let index = 0;
let startX = 0;

/* show slide */
function show(i) {
  index = (i + slides.length) % slides.length;

  slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
  dots.forEach((d, n) => d.classList.toggle("is-active", n === index));
}

// setInterval(() => {
//   show(index + 1);
// }, 10000);

dots.forEach((dot, i) => {
  dot.onclick = () => show(i);
});

show(0);
