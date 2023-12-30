const inspirationalQuoteWrapper = document.querySelector(".inspirationalQuoteWrapper");
const inspirationalParaQuote = document.querySelector(".inspirationalParaQuote");
const nextQuoteInspirationalBtn = document.querySelector(".nextQuoteInspirationalBtn");
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
nextQuoteInspirationalBtn.addEventListener("click", () => {
  let inspirationalQuotesArr = [
    
    '"Keep your face always toward the sunshine - and shadows will fall behind you" <cite>~ Walt Whitman</cite>',
    '"Do not judge each day by the harvest you reap but by the seeds that you plant" <cite>~Robert Louis Stevenson</cite>',
    '"Perfection is not attainable, but if we chase perfection we can catch excellence" <cite>~Vince Lombardi</cite>',
    '"If you believe in yourself and have dedication and pride - and never quit, you will be a winner. The price of victory is high but so are the rewards" <cite>~ Bear Bryant</cite>',
    '"Someone is sitting in the shade today because someone planted a tree a long time ago" <cite>~Warren Buffett</cite>',
    '"I hated every minute of training, but I said, Do not quit. Suffer now and live the rest of your life as a champion"<cite>~Muhammad Ali</cite>',
    '"If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away" <cite>~ Henry David Thoreau</cite>',
    '"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky" <cite>~Rabindranath Tagore</cite>',
    '"Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart"<cite>~ Marcus Aurelius</cite>',
    '"Put your heart, mind, and soul into even your smallest acts. This is the secret of success" <cite>~ Swami Sivananda</cite>',
    '"The only way to discover the limits of the possible is to go beyond them into the impossible" <cite>~Arthur C. Clarke</cite>',
    '"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them" <cite>~John F. Kennedy</cite>',
    '"Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you" <cite>~Nathaniel Hawthorne</cite>',
    '"Learning how to be still, to really be still and let life happen - that stillness becomes a radiance" <cite>~Morgan Freeman</cite>',
    '"There are two ways of spreading light: to be the candle or the mirror that reflects it"<cite>~ Edith Wharton</cite>',
    '"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style" <cite>~ Maya Angelou</cite>',
    '"Change your thoughts and you change your world"<cite>~ Norman Vincent Peale</cite>',
    '"It is during our darkest moments that we must focus to see the light"<cite>~Aristotle Onassis</cite>',
    '"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you" <cite>~ Ralph Waldo Emerson</cite>',
    '"You have to dream before your dreams can come true"<cite>~ A. P. J. Abdul Kalam</cite>',
    '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart" <cite>~Helen Keller </cite>'
  ];
  inspirationalParaQuote.innerHTML = inspirationalQuotesArr[i];
  i++;
  if (i > inspirationalQuotesArr.length - 1) {
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
  inspirationalQuoteWrapper.style.borderColor = bgcolorArr[randomcolor];
  nextQuoteInspirationalBtn.style.backgroundColor = bgcolorArr[randomcolor];
  emojisfaceheart.style.backgroundColor = bgcolorArr[randomcolor];
});
