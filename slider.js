const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const allImages = document.querySelectorAll(".images");

let slideNumber = 1;
let length = allImages.length;

right.addEventListener("click", () => {
  if (slideNumber < length) {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
  } else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  }
});

left.addEventListener("click", () => {
  if (length > 1) {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    length--;
  } else {
    slider.style.transform = `translateX(0px)`;
    length = allImages.length;
  }
});

//   0
//   800 = 1*800
//   1600 = 2*800
//   2400 = 3*800
