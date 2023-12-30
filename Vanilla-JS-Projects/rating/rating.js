const btnNums = document.querySelectorAll(".btn-num");
const submitbtn = document.querySelector(".submit-btn");
const thanks = document.querySelector(".thank-container");
const ratingContainer = document.querySelector(".rating-container");
const backbtn = document.querySelector(".back-btn");
let changeColors = document.querySelector(".colors");

btnNums.forEach((item) => {
  item.addEventListener("click", (eo) => {
    let span = document.querySelector(".span");
    let score = eo.target.textContent;
    span.innerHTML = score;
  });
});

submitbtn.addEventListener("click", () => {
  ratingContainer.classList.toggle("hidden-rating");
  thanks.classList.toggle("hidden-thank");
});

backbtn.addEventListener("click", () => {
  thanks.style.display = "none";
  ratingContainer.classList.add("back");
});

/*====chang colors=====*/
changeColors.addEventListener("click", () => {
  const randomColor = Math.round(Math.random() * 360);
  ratingContainer.style.backgroundColor = `hsl(${randomColor}, 12%, 54%)`;
  console.log(randomColor);

  /*==== please let us know paragraph====*/
  const para = document.querySelector(".let-us-know");
  para.style.color = "white";

  /*===ratings===*/
  btnNums.forEach((item) => {
    item.style.backgroundColor = `hsl(${randomColor}, 12%, 54%)`;
    item.style.border = "solid white";

    /*======star====*/
    const star = document.querySelector("img");
    star.style.backgroundColor = `hsl(${randomColor}, 12%, 54%)`;
    star.style.border = "solid white";
  });
});

/*===autowriting====*/

let i = 1;
const autowriting = () => {
  const colorchanging = "Change Color";
  changeColors.innerText = colorchanging.slice(0, i);
  i++;

  if (i > colorchanging.length) {
    i = 1;
  }
};

setInterval(autowriting, 200);
