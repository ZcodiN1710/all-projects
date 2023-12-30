const timer = document.querySelector(".timer")
const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")

let startTime = 0
let elapsedTime = 0
let timerInterval

const startFunction = () => {
    startTime = Date.now() - elapsedTime
    console.log(startTime);
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime
        timer.textContent =  updateTimer(elapsedTime)
    }, 10)
    startBtn.disabled = true
    stopBtn.disabled = false

}

const stopFunction = () => {
   clearInterval(timerInterval)
   startBtn.disabled = false
   stopBtn.disabled = true
}
const resetFunction = () => {
    clearInterval(timerInterval)
    elapsedTime = 0
    timer.textContent =  "00:00:00"
    startBtn.disabled = false
    stopBtn.disabled = true
 }
startBtn.addEventListener("click", startFunction )
stopBtn.addEventListener("click", stopFunction )
resetBtn.addEventListener("click", resetFunction )
    







const updateTimer = (elapsedTime) => {

const millisecs =  Math.floor((elapsedTime % 1000)/10)
const secs = Math.floor(elapsedTime % (1000*60)/1000)
const mins = Math.floor(elapsedTime % (1000*60*60)/(1000*60))
const hours = Math.floor(elapsedTime /(1000*60*60))
return (
    (hours ? (hours> 9 ?  hours : "0" + hours) : "00")
    + ":" +
    (mins ? (mins> 9 ?  mins : "0" + mins) : "00")
    + ":" +
    (secs ? (secs> 9 ?  secs : "0" + secs) : "00")
    + "." +
    (millisecs > 9 ? millisecs : "0" + millisecs))

}
