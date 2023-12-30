const loanInput = document.getElementById("loanInput");
const intrestRateInput = document.getElementById("intrestRateInput");
const monthsToPayinput = document.getElementById("monthsToPayinput");

const calculateLoan = () => {
  // console.log("changed");
  const loanAmountValue = loanInput.value;
  const intrestRateValue = intrestRateInput.value;
  const monthsValue = monthsToPayinput.value;

  intrest = (loanAmountValue * (intrestRateValue * 0.01)) / monthsValue;
  monthlyToPay = (loanAmountValue / monthsValue + intrest).toFixed(2)
  console.log(loanAmountValue, intrestRateValue, monthsValue);
  paymment.innerHTML = `MONTHLY PAYMENT: ${monthlyToPay}`
};

loanInput.addEventListener("change", calculateLoan);
intrestRateInput.addEventListener("change", calculateLoan);
monthsToPayinput.addEventListener("change", calculateLoan);
