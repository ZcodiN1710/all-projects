const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("Reset")
const para = document.querySelector("p")


let timeleft = 1500
let interval;

const updateTimer = () => {
    let minutes = Math.floor(timeleft / 60) 
    let seconds = Math.floor(timeleft % 60) 
    formatedTimer = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`
    para.innerHTML = formatedTimer
}


const startTimer = () => {
interval = setInterval(() => {
    timeleft--
    updateTimer()
}, 1000)
    
}
const stopTimer = () => {
    console.log("stop");
clearInterval(interval)
}
const resetTimer = () => {
    clearInterval(interval)
    timeleft = 1500
    updateTimer()
}







startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)