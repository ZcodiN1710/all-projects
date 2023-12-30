const inputContainer = document.querySelector(".inputContainer p")
const inputContainerDiv = document.querySelector(".inputContainer")
const iconCheveronDown = document.querySelector(".icon-cheveron-down")
const mediasContainer = document.querySelector(".mediasContainer")
const medias = document.querySelectorAll(".medias")


inputContainerDiv.onclick = () => {
    arrowMeadisFunctions()
}

const arrowMeadisFunctions = () => {
    mediasContainer.classList.toggle("activemediasContainer")
    iconCheveronDown.classList.toggle("activeIconCheveronDown")
}

medias.forEach(media => {
    media.addEventListener("click", () => {
        inputContainer.innerHTML = media.innerHTML
        mediasContainer.classList.add("activemediasContainer")

    })
});