const gallery = document.querySelector(".gallery-img");
const nextBtn = document.querySelector(".right-arrow");
const preBtn = document.querySelector(".left-arrow");

nextBtn.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slides");
  gallery.appendChild(slides[0]);
});

preBtn.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slides");
  gallery.prepend(slides[slides.length - 1]);
});
