const successQuotes = document.querySelector(".successParaQuote");
const nextQuoteSuccessBtn = document.querySelector(".nextquotebtn");
const successQuoteWrapper = document.querySelector(".successQuoteWrapper");
const emojisfaceheart = document.querySelector(".emojisfaceheart")
const heartlyfacecontainer = document.querySelector(".heartlyfacecontainer")
const preQuoteBtn = document.querySelector(".prequotebtn")



/*===emojiBtn===*/

emojisfaceheart.addEventListener("click", () => {
  const heartlyfaceparent = document.createElement("div")
  heartlyfacecontainer.append(heartlyfaceparent)

  const fallenHearts = setInterval(() => {
  const heartlyface = document.createElement("p")
  heartlyface.innerHTML = "&#x1F60D"
  heartlyface.classList.add("heartlyface")
  heartlyfaceparent.append(heartlyface)
  heartlyface.style.left = `${Math.random() *100}%`
  }, 50);
    
setTimeout(() => {
  clearInterval(fallenHearts)  
}, 3000)  

setTimeout(() => {
  heartlyfaceparent.remove() 
}, 4000)  
})



let successQuotesArr = [
    '"Success is not the key to happiness Happiness is the key to success If you love what you are doing you will be successful" <cite> ~Albert Schweitzer </cite>',
    '"If everyone is moving forward together, then success takes care of itself" <cite> ~Henry Ford </cite>',
    '"Action is the foundational key to all success"<cite>~Pablo Picasso </cite>',
    '"Success is getting what you want. Happiness is wanting what you get" <cite>~Dale Carnegie </cite>',
    '"I have failed over and over and over again in my life and that is why I succeed" <cite> ~Michael Jordan </cite>',
    '"Success is not measured by money or power or social rank. Success is measured by your discipline and inner peace"<cite> ~Mike Ditka </cite>',
    '"Success is a lousy teacher. It seduces smart people into thinking they cannot lose" <cite> ~Bill Gates </cite>',
    '"Do not aim for success if you want it; just do what you love and believe in, and it will come naturally"<cite> ~David Frost </cite>',
    '"Strive not to be a success, but rather to be of value" <cite> ~Albert Einstein </cite>',
    '"Man needs his difficulties because they are necessary to enjoy success" <cite> ~A.P.J. Abdul Kalam </cite>',
    '"The children are now working as if I did not exist" <cite> ~Maria Montessori </cite>',
    '"There is little success where there is little laughter" <cite>  ~Andrew Carnegie </cite>',
    '"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it" <cite> ~Bruce Lee.</cite>',
  ];



//===next Quote Success Btn===//
let i = 0;
successQuotes.innerHTML = successQuotesArr[i];

nextQuoteSuccessBtn.addEventListener("click", () => {
  i++;
  if (i > successQuotesArr.length - 1) {
    i = 0;
  }
  console.log( successQuotes.innerHTML = successQuotesArr[i]); 
 
 

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
  const randomcolor = Math.round(Math.random() * (bgcolorArr.length - 1));
  successQuoteWrapper.style.borderColor = bgcolorArr[randomcolor];
  nextQuoteSuccessBtn.style.backgroundColor = bgcolorArr[randomcolor];
  preQuoteBtn.style.backgroundColor= bgcolorArr[randomcolor];
  emojisfaceheart.style.backgroundColor = bgcolorArr[randomcolor];
});





//===previous Quote Success Btn===//
preQuoteBtn.addEventListener("click", () => {
  if (i == 0 ) {
    i = successQuotesArr.length;
  }
 i--;
console.log( successQuotes.innerHTML = successQuotesArr[i]); 
  
  

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
  const randomcolor = Math.round(Math.random() * (bgcolorArr.length - 1));
  successQuoteWrapper.style.borderColor = bgcolorArr[randomcolor];
  nextQuoteSuccessBtn.style.backgroundColor = bgcolorArr[randomcolor];
  preQuoteBtn.style.backgroundColor= bgcolorArr[randomcolor];
  emojisfaceheart.style.backgroundColor = bgcolorArr[randomcolor];
});