const day = document.getElementById("day")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("sec")

const NewYearTime = new Date("Jan 1, 2024 00:00:00").getTime()

const updateTime = () => {
const currentTime = new Date().getTime()

const gapTime = NewYearTime - currentTime

 const seconds = 1000
 const mins = seconds * 60
 const h = mins * 60
 const d = h *24

const dayTime = Math.floor(gapTime/d) 
const hourTime = Math.floor((gapTime%d)/h) 
const minsTime = Math.floor((gapTime%h)/mins) 
const secTime = Math.floor((gapTime%mins)/seconds) 

day.innerText = dayTime
hour.innerText = hourTime
minute.innerText = minsTime
second.innerText = secTime
setTimeout(updateTime, 1000)
}
updateTime()


