const main = document.querySelectorAll(".main");
const faq = document.querySelector(".faq");
const mainContainer = document.querySelector(".main-container")
const changecolor = document.querySelector(".change-color")
// const firstfaqtext = document.querySelectorAll(".first-faq-text")
// console.log(firstfaqtext);

main.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const subPara =
      eo.target.parentElement.getElementsByClassName("sub-para")[0];
    const  maintextActivebold =
    faq.getElementsByClassName("active-bold")[0];
    maintextActivebold.classList.remove("active-bold")
    eo.target.classList.add("active-bold")

  
    const  subParaActivebold =
    faq.getElementsByClassName("active")[0];
    subParaActivebold.classList.remove("active")
      subPara.classList.add("active")

    const arrow =
      item.parentElement.parentElement.getElementsByClassName("arrow")[0];

const arrowActivebold =
    faq.getElementsByClassName("active-arrow")[0];
    console.log(arrowActivebold);
    arrowActivebold.classList.remove("active-arrow")
    arrow.classList.add("active-arrow")

    // item.classList.toggle("active-bold");
    // subPara.classList.toggle("active");
    // arrow.classList.toggle("active-arrow");
    // subParaActive.classList.remove("active")
    // subParaActive.classList.add("active")

  
  });
});

/*====change colors===*/
const arrColor = ["lightgrey", "darkblue", "red", "blueviolet"]
  let i = 0
changecolor.addEventListener("click", () => {
  mainContainer.style.backgroundColor = arrColor[i]
  i+=Math.round(Math.random()*4)
  if(i>arrColor.length -1){
  i=0
  } 
})