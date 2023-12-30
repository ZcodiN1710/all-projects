const motivationalQuoteWrapper = document.querySelector(
  ".motivationalQuoteWrapper"
);
const motivationalParaQuote = document.querySelector(".motivationalParaQuote");
const nextQuoteMotivationalBtn = document.querySelector(
  ".nextQuoteMotivationalBtn"
);
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
nextQuoteMotivationalBtn.addEventListener("click", () => {
  let motivationalQuotesArr = [
    
    '"Good, better, best. Never let it rest. Til your good is better and your better is best" <cite>~ St. Jerome</cite>',
    '"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy" <cite>~Norman Vincent Peale</cite>',
    '"If you can dream it, you can do it" <cite>~Walt Disney</cite>',
    '"If you fell down yesterday, stand up today"<cite>~H. G. Wells</cite>',
    '"You will never win if you never begin" <cite>~Helen Rowland</cite>',
    '"Aim for the moon. If you miss, you may hit a star" <cite>~ W. Clement Stone</cite>',
    '"A creative man is motivated by the desire to achieve, not by the desire to beat others" <cite>~Ayn Rand</cite>',
    '"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious" <cite>~Stephen Hawking</cite>',
    '"I do not believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be" <cite>~ Ken Venturi</cite>',
    '"What you get by achieving your goals is not as important as what you become by achieving your goals" <cite>~ Zig Ziglar</cite>',
    '"Never give up, for that is just the place and time that the tide will turn" <cite>~ Harriet Beecher Stowe</cite>',
    '"Well done is better than well said" <cite>~Benjamin Franklin</cite>',
    '"Early to bed and early to rise makes a man healthy, wealthy and wise"<cite>~ Benjamin Franklin</cite>',
    '"If you are going through hell, keep going" <cite>~Winston Churchill</cite>',
  ];
  motivationalParaQuote.innerHTML = motivationalQuotesArr[i];
  i++;
  if (i > motivationalQuotesArr.length - 1) {
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
  motivationalQuoteWrapper.style.borderColor = bgcolorArr[randomcolor];
  nextQuoteMotivationalBtn.style.backgroundColor = bgcolorArr[randomcolor];
  emojisfaceheart.style.backgroundColor = bgcolorArr[randomcolor];
});
