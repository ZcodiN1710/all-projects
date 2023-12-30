const weightInputEl = document.getElementById("weightInput");
const errorEl = document.querySelector(".error");
const resultEl = document.querySelector(".result");

const calculateWeight = () => {
  const weightValue = weightInputEl.value;
  if (weightValue < 0 || isNaN(weightValue)) {
    errorEl.innerText = "Please enter a valid number";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      weightInputEl.value = "";
    }, 2000);
  } else {
    resultEl.innerText = `Your weight in kg is: ${+(weightValue / 2.2).toFixed(
      2
    )}`;
    // clearTimeout(resetTime);
    resetTime = setTimeout(() => {
      resultEl.innerHTML = "";
      weightInputEl.value = "";
    }, 10000);
  }
};

weightInputEl.addEventListener("change", calculateWeight);
