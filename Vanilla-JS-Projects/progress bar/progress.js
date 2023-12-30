const iconArrowLeft2 = document.querySelector(".icon-arrow-left2")
const iconArrowRight2 = document.querySelector(".icon-arrow-right2")
const hrFront = document.querySelector(".hrFront")
const stepNums = document.querySelectorAll(".stepNum")
const steps = document.querySelectorAll(".step")


let stepChecked = 1

iconArrowRight2.addEventListener("click", () => {
    stepChecked++
    if (stepChecked > steps.length ) {
        stepChecked = steps.length 
    } 
    updateProgressBar()

})
iconArrowLeft2.addEventListener("click", () => {
    stepChecked--
    if (stepChecked < 1 ) {
        stepChecked = 1
    } 
    updateProgressBar()

})


const updateProgressBar = () => {
    steps.forEach((step, indx) => {
        if(indx < stepChecked){
            step.classList.add("active")
            step.innerHTML =` 
            <i class="icon-checkmark"></i>
            <small>${indx===0 ? "start" : indx===step.length ? "Final" : "Step " +  indx}</small>`
        } else{
            step.classList.remove("active")
            step.innerHTML =` 
            <i class="icon-cross"></i>`
        }
    });
const checkednuber = document.querySelectorAll(".active")
console.log(checkednuber);
    hrFront.style.width = (checkednuber.length -1)/ (steps.length-1) *100 + "%"
}