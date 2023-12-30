const calcMainContainer = document.querySelector(".calcMainContainer");
const BtnsDiv = document.querySelector(".Btns");
const Btns = document.querySelectorAll(".btn");
const CalcInput = document.getElementById("CalcInput");


Btns.forEach((Btn) => {
  Btn.addEventListener("click", () => {
    inputValue = Btn.textContent;
    if (inputValue === "C") {
      CalcInput.value = "";
    } else if (inputValue === "=") {
      getResult();
    } else {
      appendValue();
    }
  });
});

const getResult = () => {
  CalcInput.value = eval(CalcInput.value);
};

const appendValue = () => {
  CalcInput.value += inputValue;
};
