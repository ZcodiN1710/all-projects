const funnyQuoteWrapper = document.querySelector(".funnyQuoteWrapper");
const funnyParaQuote = document.querySelector(".funnyParaQuote");
const nextQuoteFunnyBtn = document.querySelector(".nextQuoteFunnyBtn");
const emojisfaceheart = document.querySelector(".emojisfaceheart")
const heartlyfacecontainer = document.querySelector(".heartlyfacecontainer")


emojisfaceheart.addEventListener("click", () => {
  const heartlyfaceparent = document.createElement("div")
  heartlyfacecontainer.append(heartlyfaceparent)

  const fallenfaces = setInterval(() => {
  const heartlyface = document.createElement("p")
  heartlyface.innerHTML = "&#x1F382"
  heartlyface.classList.add("heartlyface")
  heartlyfaceparent.append(heartlyface)
  heartlyface.style.left = `${Math.random() * 100}%`
  // heartlyface.style.animationDuration = `${(Math.random() + 1) * 4}s`
  }, 50);
  
setTimeout(() => {
  clearInterval(fallenfaces)
}, 4000)

setTimeout(() => {
  heartlyfaceparent.remove()
}, 5000);
  
})





let i = 0;
nextQuoteFunnyBtn.addEventListener("click", () => {
  let funnyQuotesArr = [
    '"As a teenager you are at the last stage in your life when you will be happy to hear that the phone is for you" <cite>~Fran Lebowitz</cite>',
    '"If you are of the opinion that the contemplation of suicide is sufficient evidence of a poetic nature, do not forget that actions speak louder than words" <cite>~Fran Lebowitz</cite>',
    '"If I had to live my life again, I would make the same mistakes, only sooner" <cite>~Tankllulah Bahead</cite>',
    '"My fake plants died because I did not pretend to water them" <cite>~Mitch Hedberg</cite>',
    '"All means let us be open-minded,But not so open-minded that our brains drop out" <cite>~ Richard Dawkins</cite>',
    '"Why do they call it rush hour when nothing moves?" <cite>~Robin Williams</cite>',
    '"Everything I like is either illegal, immoral or fattening"  <cite>~Alexander Woollcott</cite>',
    '"A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man" <cite>~Lana Turner</cite>',
    '"I have not spoken to my wife in years. I did not want to interrupt her" <cite>~ Rodney Dangerfield</cite>',
    '"A day without sunshine is like, you know, night"  <cite>~Steve Martin</cite>',
    '"They say marriages are made in Heaven. But so is thunder and lightning" <cite>~ Clint Eastwood</cite>',
    '"Laziness is nothing more than the habit of resting before you get tired"  <cite>~Jules Renard</cite>',
    '"May the forces of evil become confused on the way to your house"<cite>~ George Carlin</cite>',
    '"Always remember that you are absolutely unique. Just like everyone else"  <cite>~Margaret Mead</cite>',
    '"Do not take life too seriously. You will never get out of it alive"  <cite>~Elbert Hubbard</cite>',
    '"It takes considerable knowledge just to realize the extent of your own ignorance"  <cite>~ Thomas Sowell</cite>',
    '"O Lord, help me to be pure, but not yet" <cite>~ Saint Augustine</cite>',
    '"If you could kick the person in the pants responsible for most of your trouble, you would not sit for a month" <cite>~Theodore Roosevelt</cite>'
  ];
  funnyParaQuote.innerHTML = funnyQuotesArr[i];
  i++;
  if (i > funnyQuotesArr.length - 1) {
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
  funnyQuoteWrapper.style.borderColor = bgcolorArr[randomcolor];
  nextQuoteFunnyBtn.style.backgroundColor = bgcolorArr[randomcolor];
  emojisfaceheart.style.backgroundColor = bgcolorArr[randomcolor];
});
