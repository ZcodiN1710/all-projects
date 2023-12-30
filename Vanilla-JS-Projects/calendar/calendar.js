const monthEl = document.querySelector("h1")
const dateEl = document.querySelector("p")
const daysEl = document.querySelector(".days")


const currentDate  = new Date()
const currentMonth = currentDate.getMonth()
const lastDay  = new Date(currentDate.getFullYear(),currentMonth+1, 0).getDate()
const firstDay  = new Date(currentDate.getFullYear(),currentMonth, 1).getDay()-1


const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
monthEl.innerHTML = monthArr[currentMonth]
dateEl.innerHTML = currentDate.toDateString()
console.log(monthArr[currentMonth]);

let days = ""

for (let i=firstDay; i > 0; i--) {
    days+= `  <div class="empty"></div>`
}

for (let i=1; i <=lastDay; i++) {
    if(i === currentDate.getDate()){
        days+= `<div class="today">${i}</div>`
    } else{

        days+= `<div>${i}</div>`
    }
}
daysEl.innerHTML = days