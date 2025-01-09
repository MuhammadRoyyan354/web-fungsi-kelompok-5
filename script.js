const slides = document.querySelector(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Tombol prev: Navigasi ke slide sebelumnya (melingkar)
prev.addEventListener("click", () => {
  index = index > 0 ? index - 1 : totalSlides - 1;
  updateSlider();
});

// Tombol next: Navigasi ke slide berikutnya (melingkar)
next.addEventListener("click", () => {
  index = index < totalSlides - 1 ? index + 1 : 0;
  updateSlider();
});

// Pastikan tombol terlihat di semua slide
prev.style.display = "block";
next.style.display = "block";
