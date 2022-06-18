const slideImg = document.querySelectorAll(".img");
const nextBtn = document.querySelector(".next");
const lastBtn = document.querySelector(".last");
const slideImgLength = slideImg.length - 1;
let index = 0;

nextBtn.addEventListener("click", nextSlide);

function nextSlide() {
  if (index < slideImgLength) {
    slideImg[index].classList.remove("active");
    index++;
    slideImg[index].classList.add("active");
  } else if ((index = slideImgLength)) {
    slideImg[index].classList.remove("active");
    index = 0;
    slideImg[index].classList.add("active");
  }
}

lastBtn.addEventListener("click", lastSlide);

function lastSlide() {
  if (index > 0) {
    slideImg[index].classList.remove("active");
    index--;
    slideImg[index].classList.add("active");
  } else if (index < slideImgLength) {
    slideImg[index].classList.remove("active");
    index = slideImgLength;
    slideImg[index].classList.add("active");
  }
}

