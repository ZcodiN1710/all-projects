const currencyInput1 = document.getElementById("currencyInput1")
const currencyInput2 = document.getElementById("currencyInput2")
const currency1 = document.getElementById("currency1")
const currency2 = document.getElementById("currency2")
const resultEl = document.querySelector(".result")



const updateRate = async() => {
    const fetchData = await fetch(`https://v6.exchangerate-api.com/v6/5192f4b1d8e557f859c08e5c/latest/${currency1.value}`)
    const data = await fetchData.json()
    console.log(data);
    const rate = data.conversion_rates[currency2.value]
    console.log(rate); 
    
    resultEl.innerText = `1 ${currency1.value} = ${rate + " " + currency2.value}`
    
    currencyInput2.value = (currencyInput1.value * rate).toFixed(2)
}

currency1.addEventListener("change",updateRate)
currency2.addEventListener("change",updateRate)
currencyInput1.addEventListener("change",updateRate)