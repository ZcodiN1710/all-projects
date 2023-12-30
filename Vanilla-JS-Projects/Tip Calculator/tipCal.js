const billInput = document.getElementById("billInput")
const tipInput = document.getElementById("tipInput")
const totalPaidPerPerson = document.querySelector(".totalPaidPerPerson")
const numOfPeople = document.querySelector(".numOfPeople")
const minusSign = document.querySelector(".minusSign")
const plusSign = document.querySelector(".plusSign")

let numbOfPeople = Number(numOfPeople.textContent)
console.log(numbOfPeople);
const totalPaid = () => {
    const billPaid = Number(billInput.value) 
    const tipPercentage = Number(tipInput.value /100)
    const tipAmount = billPaid * tipPercentage
    const totalPaid = billPaid + tipAmount
    const totalPaidPerPersonAmount= totalPaid/numbOfPeople
    totalPaidPerPerson.innerHTML = `$${totalPaidPerPersonAmount.toLocaleString('en-US')}`
    console.log(totalPaidPerPersonAmount);
}

const increaseDecreasePeople = () => {
    numbOfPeople++
    numOfPeople.innerHTML = `${numbOfPeople}`
    totalPaid()
}
minusSign.addEventListener("click", () => {
    if (numbOfPeople > 1) {
        numbOfPeople--
        numOfPeople.innerHTML = `${numbOfPeople}`
        totalPaid()
    }
})

