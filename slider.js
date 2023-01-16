const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const allImages = document.querySelectorAll(".images");

let slideNumber = 1;
let length = allImages.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber --;
};

// right.addEventListener("click", () => {
//   if (slideNumber < length) {
//     nextSlide()
//   } else {
//     firstSlide()
//   }
// });

//buttons functions

const buttons = document.querySelectorAll(".button");


let i = 0;
buttons[0].style.backgroundColor = "white";


const resetBG = () => {
  buttons.forEach(button=> {
    button.style.backgroundColor = 'transparent';
  })
}


buttons.forEach((button,i) => {
button.addEventListener('click',() => {
  resetBG()
  buttons[i].style.backgroundColor = "white";
  slider.style.transform =  `translateX(-${i*800}px)`;
  slideNumber = i+1;
})
})


right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : firstSlide();
  resetBG();
  buttons[slideNumber-1].style.backgroundColor = "white";

});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : lastSlide();
  resetBG();
  buttons[slideNumber-1].style.backgroundColor = "white";
});

//   0
//   800 = 1*800
//   1600 = 2*800
//   2400 = 3*800

