const animatedBarConatainer = document.querySelector(".animatedBarConatainer")
const input = document.querySelector("input")
const iconMic = document.querySelector(".icon-mic")
const iconSearch = document.querySelector(".icon-search")


iconSearch.addEventListener("click", () => {
    toggleActive()
})

const toggleActive = () => {
    animatedBarConatainer.classList.toggle("activeSearchBar")
    input.classList.toggle("activeSearch")
    iconMic.classList.toggle("active-icon-mic")
}