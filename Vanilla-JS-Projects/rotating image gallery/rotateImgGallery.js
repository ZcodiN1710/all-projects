const imagesContainer = document.querySelector(".imagesContainer")
const nextBtn = document.getElementById("Next")
const prevBtn = document.getElementById("Prev")

let x = 0
let timer
prevBtn.addEventListener("click", () => {
    x+=45
    clearTimeout(timer)
    rotateAuto()
})

nextBtn.addEventListener("click", () => {
    x-=45
    clearTimeout(timer)
    rotateAuto()
})

const rotateAuto = () => {
    imagesContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
  timer = setTimeout(() => {
        x-=45
        rotateAuto()
    } , 3000)
}
rotateAuto()
 