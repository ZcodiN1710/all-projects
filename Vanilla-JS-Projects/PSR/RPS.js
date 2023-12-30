const yourChoices = document.querySelectorAll(".yourChoice");
const youResult = document.querySelector(".YOU");
const compResult = document.querySelector(".COMP");
const result = document.querySelector(".result");
const resetGameBtn = document.querySelector("button");


yourChoices.forEach((item) => {
  item.addEventListener("click", () => {
    
    youResult.innerHTML = item.textContent;
    const random = Math.round(Math.random() * (yourChoices.length - 1));
    if (random == 0) {
      compResult.innerHTML = "ROCK";
    } else if (random == 1) {
      compResult.innerHTML = "SCISSOR";
    } else if (random == 2) {
      compResult.innerHTML = "PAPER";
    }

/*===============================================================*/    
    if (youResult.innerHTML == compResult.innerHTML) {
        result.innerHTML = "IT'S A DRAW"
    }
    if (youResult.innerHTML == "ROCK" && compResult.innerHTML == "SCISSOR") {
        result.innerHTML = "YOU WON"
    }
    if (youResult.innerHTML == "ROCK" && compResult.innerHTML == "PAPER") {
        result.innerHTML = "YOU LOST"
    }
    if (youResult.innerHTML == "PAPER" && compResult.innerHTML== "ROCK") {
        result.innerHTML = "YOU WON"
    }
    if (youResult.innerHTML == "PAPER" && compResult.innerHTML== "SCISSOR") {
        result.innerHTML = "YOU LOST"
    }
    if (youResult.innerHTML == "SCISSOR" && compResult.innerHTML== "PAPER") {
        result.innerHTML = "YOU WON"
    }
    if (youResult.innerHTML == "SCISSOR" && compResult.innerHTML== "ROCK") {
        result.innerHTML = "YOU LOST"
    }
   
  });
});



resetGameBtn.addEventListener("click", () => {
    window.location.reload()
})