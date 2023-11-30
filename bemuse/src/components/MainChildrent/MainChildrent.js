const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slideCount;
  showSlide(slideIndex);
});

prevBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  showSlide(slideIndex);
});

setInterval(() => {
  slideIndex = (slideIndex + 1) % slideCount;
  showSlide(slideIndex);
}, 5000);
