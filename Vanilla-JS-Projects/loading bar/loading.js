const counterPra = document.querySelector("p")
const barLoad = document.querySelector(".frontBar")

counter = 0

const updateBar = () => {
    counterPra.innerText = counter + "%"
    barLoad.style.width = counter + "%"
   counter++ 
   if(counter < 101){
    setTimeout(updateBar, 50);
   }
}
 
updateBar()