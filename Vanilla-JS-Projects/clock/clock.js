const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secEl = document.querySelector(".second")

const updateClock = () => {
    const currentDate = new Date()
    setTimeout(updateClock, 1000)

    const currentHour = currentDate.getHours()
    const currentmin = currentDate.getMinutes()
    const currentsec = currentDate.getSeconds()

    const hourDeg = (currentHour/12) * 360
    hourEl.style.transform = `rotate(${hourDeg}deg)`
    const minDeg = (currentmin/60) * 360
    minuteEl.style.transform = `rotate(${minDeg}deg)`
    const secDeg = (currentsec/60) * 360
    secEl.style.transform = `rotate(${secDeg}deg)`
}

setInterval(updateClock, 1000)