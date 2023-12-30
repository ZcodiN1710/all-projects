const heightInput = document.getElementById("heightInput")
const weightInput = document.getElementById("weightInput")
const BMIInput = document.getElementById("BMIInput")
const button = document.querySelector("button")
const lastpara = document.querySelector(".last")


const computeBMI = () => {
const heightInputValue = heightInput.value/100
const weightInputValue = +weightInput.value
console.log(heightInputValue,weightInputValue);

    BMIInput.value = (weightInputValue / (heightInputValue**2)).toFixed(2)
    console.log(BMIInput.value);
if(BMIInput.value < 18.5){
    lastpara.innerHTML += " Under weight"
} else if (BMIInput.value >= 18.5 && BMIInput.value <= 24.9){
    lastpara.innerHTML += " Normal weight"
} else if(BMIInput.value >= 25. && BMIInput.value <= 29.9){
    lastpara.innerHTML += " Over weight"
}else{
    lastpara.innerHTML += " Obesity"
}
}


button.addEventListener("click", computeBMI)