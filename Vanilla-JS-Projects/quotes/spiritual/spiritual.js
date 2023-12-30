const spiritualQuoteWrapper = document.querySelector(".spiritualQuoteWrapper");
const spiritualParaQuote = document.querySelector(".spiritualParaQuote");
const nextQuoteSpiritualBtn = document.querySelector(".nextQuoteSpiritualBtn");
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
nextQuoteSpiritualBtn.addEventListener("click", () => {
  let spiritualQuotesArr = [
    '"The great thing to remember is that though our feelings come and go God’s love for us does not" <cite>~ C.S. Lewis</cite>',
    '"You do not need to work to become spiritual. You are spiritual; you need only to remember that fact. Spirit is within you. God is within you" <cite>~ Julia Cameron</cite>',
    '"Spirituality is not about being fixed; it is about God being present in the mess of our unfixedness" <cite>~ Michael Yaconelli</cite>',
    '"God put us here on this carnival ride. We close our eyes, never knowing where it’ll take us next" <cite>~ Carrie Underwood</cite>',
    '"I sometimes get very angry at God, and I do not feel guilty about it, because the anger is an affirmation of faith. You cannot get angry at someone who is not there" <cite>~ Madeleine L’Engle, The Irrational Season</cite>',
    '"You cannot have a physical transformation until you have a spiritual transformation" <cite>~ Cory Booker</cite>',
    '"Nothing binds you except your thoughts; nothing limits you except your fear; and nothing controls you except your beliefs" <cite>~ Marianne Williamson</cite>',
    '"We are not human beings having a spiritual experience; we are spiritual beings having a human experience" <cite>~ Pierre Teilhard de Chardin</cite>',
    '"When you connect to the silence within you, that is when you can make sense of the disturbance going on around you" <cite>~ Stephen Richards</cite>',
    '"Quiet the mind and the soul will speak" <cite>~ Ma Jaya Sati Bhagavati</cite>',
    '"You have power over your mind not outside events. Realize this, and you will find strength" <cite>~ Marcus Aurelius</cite>',
    '"Be tolerant of those who are lost on their path. Ignorance, conceit, anger, jealousy, and greed stem from a lost soul. Pray that they will find guidance" <cite>~ Elder Wisdom</cite>',
    '"It does not matter how long you are spending on the earth, how much money you have gathered or how much attention you have received. It is the amount of positive vibration you have radiated in life that matters" <cite>~ Amit Ray</cite>',
    '"The unexamined life is not worth living" <cite>~ Socrates</cite>',
    '"You will never be able to escape from your heart. So it is better to listen to what it has to say" <cite>~ Paulo Coelho</cite>',
    '"A single event can awaken within us a stranger totally unknown to us. To live is to be slowly born" <cite>~Antoine de Saint-Exupery</cite>',
    '"If you lose money you lose much, if you lose friends you lose more, if you lose faith you lose all" <cite>~ Eleanor Roosevelt</cite>',
    '"The soul is placed in the body like a rough diamond and must be polished, or the luster of it will never appear" <cite>~ Daniel Defoe</cite>',
    '"The spiritual journey is the unlearning of fear and the acceptance of love" <cite>~ Marianne Williamson</cite>',
    '"God will not look you over for medals, degrees or diplomas but for scars" <cite>~ Elbert Hubbard</cite>',
  ];

  spiritualParaQuote.innerHTML = spiritualQuotesArr[i];
  i++;
  if (i > spiritualQuotesArr.length - 1) {
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
  spiritualQuoteWrapper.style.borderColor = bgcolorArr[randomcolor];
  nextQuoteSpiritualBtn.style.backgroundColor = bgcolorArr[randomcolor];
  emojisfaceheart.style.backgroundColor = bgcolorArr[randomcolor];
});
