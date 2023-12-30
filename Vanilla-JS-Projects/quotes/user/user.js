const userQuoteWrapper = document.querySelector(".userQuoteWrapper");
const userSubmitBtn = document.getElementById("userSubmitBtn");
const userParaQuote = document.querySelector(".userParaQuote");
const nextQuoteUserBtn = document.querySelector(".nextQuoteUserBtn");
const Userinput = document.querySelector("input")
console.log(Userinput.value);

//===userSubmitBtn====
let i = 0;


let userQuotesArr = ["always be yourself", "love your self","never give up"];
userQuotesArr.push(localStorage.getItem("UserInput"))

userSubmitBtn.addEventListener("click", (eo) => {
  eo.preventDefault();
  localStorage.setItem("UserInput" , Userinput.value)
  userQuotesArr.push(localStorage.getItem("UserInput"))
  userParaQuote.innerHTML =  userQuotesArr[userQuotesArr.length - 1]
 

  
});

//===nextQuote-UserBtn====
nextQuoteUserBtn.addEventListener("click", () => {
  userParaQuote.innerHTML =  userQuotesArr[i];
  console.log(userQuotesArr);
  i++
  Userinput.value = ""
  
  if (i > userQuotesArr.length-1) {
    i = 0;
  }

  const bgcolorArr = [
    "cadetblue",
    "chartreuse",
    "aqua",
    "cornflowerblue",
    "gold",
    "fuchsia",
    "darksalmon",
    "blanchedalmond",
    "white",
    "yellow",
    "lightpink",
  ];
  const randomcolor = Math.floor(Math.random() * bgcolorArr.length);
  userQuoteWrapper.style.borderColor = bgcolorArr[randomcolor];
  nextQuoteUserBtn.style.backgroundColor = bgcolorArr[randomcolor];
});


  
//  const saveQuotes = () => {
//   // let userQuotes = []
//   if(localStorage.getItem("userQuote") === null){
//     localStorage.setItem("userQuote", "[]" )
//   }
//   let oldData = JSON.parse(localStorage.getItem("userQuote")) 
//   oldData.push({ Quote: Userinput.value})
//   localStorage.setItem("userQuote" , JSON.stringify(oldData))
//   // userParaQuote.innerHTML =  JSON.parse(localStorage.getItem("userQuote")) 

//  }


// const view = () => {
//   if(localStorage.getItem("userQuote") != null){
//     userParaQuote.innerHTML =  (localStorage.getItem("userQuote")) 
//   }
// }






