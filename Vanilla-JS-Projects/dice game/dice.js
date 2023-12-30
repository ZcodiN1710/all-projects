const button = document.querySelector("button");
const dice = document.querySelector(".dice");
const roll = document.querySelector(".roll");
const diceRolled = document.querySelector(".diceRolled");
const results = document.querySelector(".results");
const diceGameContainer = document.querySelector(".diceGameContainer");

let rollIndex = 0;
const historyList = [];

button.addEventListener("click", () => {
    dice.classList.add("rollAnimation");
    setTimeout(() => {
        dice.classList.remove("rollAnimation")
    }, 1000)
  randomDices();
});

const randomDices = () => {
  const randomDice = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(randomDice);
  dice.innerHTML = diceFace;
  historyList.push(randomDice);
  updateHistoryList();
};

const updateHistoryList = () => {
    results.innerHTML = "";
  for (let i = 1; i < historyList.length; i++) {
    const innerResult = document.createElement("div");
    innerResult.classList.add("innerResult")
    const rollPara = document.createElement("p");
    const dicePara = document.createElement("p");
    rollPara.classList.add("roll");
    dicePara.classList.add("diceRolled")
    rollPara.innerHTML = `Roll ${i}:`;
    dicePara.innerHTML = `${getDiceFace(historyList[i])}`;
    innerResult.append(rollPara);
    innerResult.append(dicePara);
    results.append(innerResult)
  }
};

const getDiceFace = (randomDice) => {
  switch (randomDice) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860";
    case 6:
      return "&#9861";
  }
};




//  const resultFunction = () => {
//     const randomDice = Math.floor(Math.random() * 6) +1;
//      rollIndex++
//    const resultDiv = `
//      <div class="innerResult">
//              <p class="roll">Roll <span>${rollIndex}:</span></p>
//              // <p class="diceRolled" >${getDiceFace(randomDice)}</p>
//      </div>`;
//      results.innerHTML += resultDiv
//  };

// const dicesFunction = () => {
//   const dices = [
//     ` <div class="dice">&#9860</div>`,
//     ` <div class="dice">&#9856</div>`,
//     ` <div class="dice">&#9857</div>`,
//     ` <div class="dice">&#9858</div>`,
//     ` <div class="dice">&#9859</div>`,
//     ` <div class="dice">&#9861</div>`,
//   ];
//   const randomDice = Math.floor(Math.random() * dices.length);
//   dice.innerHTML = dices[randomDice];
//   console.log(dices[randomDice]);
//   return dices[randomDice];
// };

// const resultFunction = () => {
//

//     rollIndex++
//   const resultDiv = `
//     <div class="innerResult">
//             <p class="roll">Roll <span>${rollIndex}:</span></p>
//             // <p class="diceRolled" >${dices[randomDice]}</p>
//     </div>`;
//     results.innerHTML += resultDiv
// };
