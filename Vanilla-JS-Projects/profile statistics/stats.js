const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.textContent = 0
    
const icrementCounter = () => {
    let currentNum =  +counter.textContent
    // console.log(typeof(currentNum));
    const dataCeil = counter.getAttribute("data-ceil")
    // console.log(dataCeil);
    const increment = Math.ceil(dataCeil/15) 
    // console.log(increment);
    currentNum+= increment
    if (currentNum < dataCeil) {
        counter.textContent = currentNum
        setTimeout(icrementCounter, 80)
    } else {
        counter.textContent = dataCeil
    }

}
icrementCounter()
});

