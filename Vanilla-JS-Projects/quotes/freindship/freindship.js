const freindshipQuoteWrapper = document.querySelector(".freindshipQuoteWrapper");
const freindshipParaQuote = document.querySelector(".freindshipParaQuote");
const nextQuoteFreindshipBtn = document.querySelector(".nextQuoteFreindshipBtn");
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
nextQuoteFreindshipBtn.addEventListener("click", () => {
  let freindshipQuotesArr = [
    '"My best friend is the one who brings out the best in me" <cite> ~ Henry Ford</cite>',
    '"Friendship is the only cement that will ever hold the world together"<cite>~ Woodrow Wilson</cite>',
    '"A day without a friend is like a pot without a single drop of honey left inside"<cite> ~ Winnie the Pooh</cite>',
    '"Things are never quite as scary when you have got a best friend" <cite> ~ Bill Watterson</cite>',
    '"Friendship is the hardest thing in the world to explain. It is not something you learn in school. But if you have not learned the meaning of friendship, you really have not learned anything" <cite> ~ Muhammad Ali</cite>',
    '"My best friend is the one who brings out the best in me" <cite>~ Henry Ford</cite>',
    '"Friendship is the only cement that will ever hold the world together" <cite>~ Woodrow Wilson</cite>',
    '"A day without a friend is like a pot without a single drop of honey left inside" <cite> ~ Winnie the Pooh</cite>',
    '"Remember that life is most valuable antiques are dear old friends" <cite>~ H. Jackson Brown, Jr.</cite>',
    '"Life is an ugly, awful place to not have a best friend"<cite> ~ Sarah Dessen</cite>',
    '"Growing apart does not change the fact that for a long time we grew side by side; our roots will always be tangled" <cite> ~ Ally Condie</cite>',
    '"You do not have to have anything in common with people you have known since you were five. With old friends, you have got your whole life in common" <cite> ~ Lyle Lovett</cite>',
    '"Tis the privilege of friendship to talk nonsense, and to have her nonsense respected" <cite>~ Charles Lamb</cite>',
    '"How much good inside a day? Depends how good you live them. How much love inside a friend? Depends how much you give them" <cite> ~ Shel Silverstein</cite>',
    '"A friend is one soul abiding in two bodies" <cite> ~ Aristotle</cite>',
    '"Never leave a friend behind. Friends are all we have to get us through this life and they are the only things from this world that we could hope to see in the next" <cite> ~ Dean Koontz</cite>',
    '"Friendship is a sheltering tree; Samuel" <cite>~ Taylor Coleridge</cite>',
    '"A true friend is for ever a friend" <cite> ~ George MacDonald</cite>"',
    '"Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years. ~ Richard Bach</cite>',
    '"One good friendship will outlive forty average loves" <cite> ~ Unknown</cite>',
    '"To friendship every burden is light" <cite> ~ Aesop</cite>',
    '"True friendship is a plant of slow growth…" <cite>~ George Washington</cite>',
    '"The only reward of virtue is virtue; the only way to have a friend is to be one" <cite> ~ Ralph Waldo Emerson</cite>',
    '"Friendship improves happiness and abates misery, by, the doubling of our joy, and diving of our grief" <cite> ~Joseph Addison</cite>',
    '"I would rather walk with a friend in the dark than walk alone in the light" <cite>— Helen Keller</cite>',
    '"Things are never quite as scary when you have got a best friend" <cite> ~ Bill Watterson </cite>',
  ];
  freindshipParaQuote.innerHTML = freindshipQuotesArr[i];
  i++;
  if (i > freindshipQuotesArr.length - 1) {
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
  freindshipQuoteWrapper.style.borderColor = bgcolorArr[randomcolor];
  nextQuoteFreindshipBtn.style.backgroundColor = bgcolorArr[randomcolor];
  emojisfaceheart.style.backgroundColor = bgcolorArr[randomcolor];
});
