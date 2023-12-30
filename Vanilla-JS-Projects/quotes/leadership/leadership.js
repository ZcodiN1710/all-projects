const leadershipQuoteWrapper = document.querySelector(".leadershipQuoteWrapper");
const leadershipParaQuote = document.querySelector(".leadershipParaQuote");
const nextQuoteLeadershipBtn = document.querySelector(".nextQuoteLeadershipBtn");
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
nextQuoteLeadershipBtn.addEventListener("click", () => {
  let leadershipQuotesArr = [
    '"Do every job you’re in like you’re going to do it for the rest of your life, and demonstrate that ownership of it"<cite>~ Mary Barra</cite>',
    '"Have those uncomfortable moments. Because my strong personal belief is it is those moments that cause you to grow the most yourself, but that also differentiate you the most in your career"<cite>~ Corie Barry</cite>',
    '"Just because you are CEO, do not think you have landed. You must continually increase your learning, the way you think, and the way you approach the organization. I have never forgotten that" <cite>~ Indra Nooyi</cite>',
    '"Innovation distinguishes between a leader and a follower" <cite>~Steve Jobs, Apple co-founder</cite>',
    '"The very essence of leadership is that you have to have vision. You cannot blow an uncertain trumpet" <cite>~Theodore M. Hesburgh</cite>',
    '"You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You must do the thing you think you cannot do" <cite>~ Eleanor Roosevelt</cite>',
    '"A genuine leader is not a searcher for consensus but a molder of consensus"<cite>~Martin Luther King Jr.</cite>',
    '"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change"<cite>~Charles Darwin</cite>',
    '"I start with the premise that the function of leadership is to produce more leaders, not more followers" <cite>~Ralph Nader</cite>',
    '"A good objective of leadership is to help those who are doing poorly to do well and to help those who are doing well to do even better" <cite>~Jim Rohn</cite>',
    '"If your actions inspire others to dream more, learn more, do more and become more, you are a leader" <cite>~John Quincy Adams</cite>',
    '"A great person attracts great people and knows how to hold them together" <cite>~Johann Wolfgang Von Goethe</cite>',
    '"Leadership is the art of giving people a platform for spreading ideas that work" <cite>~Seth Godin</cite>',
    '"A leader takes people where they want to go. A great leader takes people where they do not necessarily want to go, but ought to be" <cite>~Rosalynn Carter</cite>',
    '"Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others" <cite>~Jack Welch</cite>',
    '"Leadership and learning are indispensable to each other" <cite>~John F. Kennedy</cite>',
    '"No man will make a great leader who wants to do it all himself, or to get all the credit for doing it"<cite>~Andrew Carnegie</cite>',
    '"I do business with my heart as much as I do with my head, both personally and professionally" <cite>~ Ursula Burns</cite>',
  ];
  leadershipParaQuote.innerHTML = leadershipQuotesArr[i];
  i++;
  if (i > leadershipQuotesArr.length - 1) {
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
  leadershipQuoteWrapper.style.borderColor = bgcolorArr[randomcolor];
  nextQuoteLeadershipBtn.style.backgroundColor = bgcolorArr[randomcolor];
  emojisfaceheart.style.backgroundColor = bgcolorArr[randomcolor];
});
