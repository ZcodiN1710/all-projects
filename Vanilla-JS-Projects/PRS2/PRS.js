const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const yourscore = document.querySelector(".yourscore span");
const computerscore = document.querySelector(".computerscore span");


let youscore = 0;
let compscore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    displayResult(button.id, computerMove());
  });
});

const computerMove = () => {
  const compChoices = ["rock", "paper", "scissor"];
  const randomMove = Math.floor(Math.random() * compChoices.length);
  return compChoices[randomMove];
};

const displayResult = (youMove, compMove) => {
  if (youMove == compMove) {
    result.innerHTML = "IT'S A TIE!";
  } else if (
    (youMove === "rock" && compMove === "scissor") ||
    (youMove === "paper" && compMove === "rock") ||
    (youMove === "scissor" && compMove === "paper")
  ) {
    youscore++
    yourscore.textContent = youscore
    result.innerHTML = `YOU WON! ${youMove} beats ${compMove}`;
  } else {
    compscore++
    computerscore.textContent = compscore
    result.innerHTML = `YOU LOST! ${compMove} beats ${youMove}`;
  }
};



// const yourMove = () => {
//     buttons.forEach(button => {
//         button.addEventListener("click", (eo) => {
//             if(button.id == "paper"){
//                 youMove = "paper"

//             }else if (button.id == "rock"){
//                 youMove = "rock"

//             }else if (button.id == "scissor"){
//                 youMove = "scissor"
//             }
//             console.log("yourMove:", youMove);
//             computerMove()
//             updteGame()

//             youscor
//             // console.log(score);
//         })
//     });
// }
// yourMove()

// const computerMove = () => {
//     const randomMove = Math.floor(Math.random()*3)
//     if (randomMove == 0){
//         compMove = "rock"
//     } else if (randomMove == 1){
//         compMove = "paper"
//     } else if (randomMove == 2){
//         compMove = "scissor"
//     }
//     console.log("computer:" ,compMove);
// }

// const updteGame = () => {
//     if (youMove == compMove) {
//         result.innerHTML = "IT'S A DRAW!"
//     }
//     if (youMove == "rock" && compMove == "scissor") {
//         result.innerHTML = "YOU WON! rock beats scissor"
//     }
//     if (youMove == "rock" && compMove == "paper") {
//         result.innerHTML = "YOU LOST! paper beats rock"

//     }
//     if (youMove == "paper" && compMove == "rock") {
//         result.innerHTML = "YOU WON! paper beats rock"
//     }
//     if (youMove == "paper" && compMove== "scissor") {
//         result.innerHTML = "YOU LOST! scissor beats paper"
//     }
//     if (youMove == "scissor" && compMove== "paper") {
//         result.innerHTML = "YOU WON! scissor beats paper"
//     }
//     if (youMove == "scissor" && compMove== "rock") {
//         result.innerHTML = "YOU LOST!scissor beats rock"
//     }

// }

// const updataeScore = () => {
//     if(result.includes("YOU WON!")){
// console.log("win");
//     }
//     // score++
// }
