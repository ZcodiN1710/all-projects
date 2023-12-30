const QuoteOfTheDay = document.querySelector(".QuoteOfTheDayPara");
const clockContainer = document.querySelector(".clock");

//===QuoteOfTheDayPara===//
const successQuotesArr = [
  '"Success is not the key to happiness Happiness is the key to success If you love what you are doing you will be successful" <span> ~Albert Schweitzer </span>',
  '"If everyone is moving forward together, then success takes care of itself" <span> ~Henry Ford </span>',
  '"Action is the foundational key to all success"<span>~Pablo Picasso </span>',
  '"Success is getting what you want. Happiness is wanting what you get" <span>~Dale Carnegie </span>',
  '"I have failed over and over and over again in my life and that is why I succeed" <span> ~Michael Jordan </span>',
  '"Success is not measured by money or power or social rank. Success is measured by your discipline and inner peace"<span> ~Mike Ditka </span>',
  '"Success is a lousy teacher. It seduces smart people into thinking they cannot lose" <span> ~Bill Gates </span>',
  '"Do not aim for success if you want it; just do what you love and believe in, and it will come naturally"<span> ~David Frost </span>',
  '"Strive not to be a success, but rather to be of value" <span> ~Albert Einstein </span>',
  '"Man needs his difficulties because they are necessary to enjoy success" <span> ~A.P.J. Abdul Kalam </span>',
  '"The children are now working as if I did not exist" <span> ~Maria Montessori </span>',
  '"There is little success where there is little laughter" <span>  ~Andrew Carnegie </span>',
  '"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it" <span> ~Bruce Lee.</span>',

  '"My best friend is the one who brings out the best in me" <span> ~ Henry Ford</span>',
  '"Friendship is the only cement that will ever hold the world together"<span>~ Woodrow Wilson</span>',
  '"A day without a friend is like a pot without a single drop of honey left inside"<span> ~ Winnie the Pooh</span>',
  '"Things are never quite as scary when you have got a best friend" <span> ~ Bill Watterson</span>',
  '"Friendship is the hardest thing in the world to explain. It is not something you learn in school. But if you have not learned the meaning of friendship, you really have not learned anything" <span> ~ Muhammad Ali</span>',
  '"My best friend is the one who brings out the best in me" <span>~ Henry Ford</span>',
  '"Friendship is the only cement that will ever hold the world together" <span>~ Woodrow Wilson</span>',
  '"A day without a friend is like a pot without a single drop of honey left inside" <span> ~ Winnie the Pooh</span>',
  '"Remember that life is most valuable antiques are dear old friends" <span>~ H. Jackson Brown, Jr.</span>',
  '"Life is an ugly, awful place to not have a best friend"<span> ~ Sarah Dessen</span>',
  '"Growing apart does not change the fact that for a long time we grew side by side; our roots will always be tangled" <span> ~ Ally Condie</span>',
  '"You do not have to have anything in common with people you have known since you were five. With old friends, you have got your whole life in common" <span> ~ Lyle Lovett</span>',
  '"Tis the privilege of friendship to talk nonsense, and to have her nonsense respected" <span>~ Charles Lamb</span>',
  '"How much good inside a day? Depends how good you live them. How much love inside a friend? Depends how much you give them" <span> ~ Shel Silverstein</span>',
  '"A friend is one soul abiding in two bodies" <span> ~ Aristotle</span>',
  '"Never leave a friend behind. Friends are all we have to get us through this life and they are the only things from this world that we could hope to see in the next" <span> ~ Dean Koontz</span>',
  '"Friendship is a sheltering tree; Samuel" <span>~ Taylor Coleridge</span>',
  '"A true friend is for ever a friend" <span> ~ George MacDonald</span>"',
  '"Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years. <span>~ Richard Bach</span>',
  '"One good friendship will outlive forty average loves" <span> ~ Unknown</span>',
  '"To friendship every burden is light" <span> ~ Aesop</span>',
  '"True friendship is a plant of slow growth…" <span>~ George Washington</span>',
  '"The only reward of virtue is virtue; the only way to have a friend is to be one" <span> ~ Ralph Waldo Emerson</span>',
  '"Friendship improves happiness and abates misery, by, the doubling of our joy, and diving of our grief" <span> ~Joseph Addison</span>',
  '"I would rather walk with a friend in the dark than walk alone in the light" <span>— Helen Keller</span>',
  '"Things are never quite as scary when you have got a best friend" <span> ~ Bill Watterson </span>',

  '"As a teenager you are at the last stage in your life when you will be happy to hear that the phone is for you" <span>~Fran Lebowitz</span>',
  '"If you are of the opinion that the contemplation of suicide is sufficient evidence of a poetic nature, do not forget that actions speak louder than words" <span>~Fran Lebowitz</span>',
  '"If I had to live my life again, I would make the same mistakes, only sooner" <span>~Tankllulah Bahead</span>',
  '"My fake plants died because I did not pretend to water them" <span>~Mitch Hedberg</span>',
  '"All means let us be open-minded,But not so open-minded that our brains drop out" <span>~ Richard Dawkins</span>',
  '"Why do they call it rush hour when nothing moves?" <span>~Robin Williams</span>',
  '"Everything I like is either illegal, immoral or fattening"  <span>~Alexander Woollcott</span>',
  '"A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man" <span>~Lana Turner</span>',
  '"I have not spoken to my wife in years. I did not want to interrupt her" <span>~ Rodney Dangerfield</span>',
  '"A day without sunshine is like, you know, night"  <span>~Steve Martin</span>',
  '"They say marriages are made in Heaven. But so is thunder and lightning" <span>~ Clint Eastwood</span>',
  '"Laziness is nothing more than the habit of resting before you get tired"  <span>~Jules Renard</span>',
  '"May the forces of evil become confused on the way to your house"<span>~ George Carlin</span>',
  '"Always remember that you are absolutely unique. Just like everyone else"  <span>~Margaret Mead</span>',
  '"Do not take life too seriously. You will never get out of it alive"  <span>~Elbert Hubbard</span>',
  '"It takes considerable knowledge just to realize the extent of your own ignorance"  <span>~ Thomas Sowell</span>',
  '"O Lord, help me to be pure, but not yet" <span>~ Saint Augustine</span>',
  '"If you could kick the person in the pants responsible for most of your trouble, you would not sit for a month" <span>~Theodore Roosevelt</span>',

  '"Keep your face always toward the sunshine - and shadows will fall behind you" <span>~ Walt Whitman</span>',
  '"Do not judge each day by the harvest you reap but by the seeds that you plant" <span>~Robert Louis Stevenson</span>',
  '"Perfection is not attainable, but if we chase perfection we can catch excellence" <span>~Vince Lombardi</span>',
  '"If you believe in yourself and have dedication and pride - and never quit, you will be a winner. The price of victory is high but so are the rewards" <span>~ Bear Bryant</span>',
  '"Someone is sitting in the shade today because someone planted a tree a long time ago" <span>~Warren Buffett</span>',
  '"I hated every minute of training, but I said, Do not quit. Suffer now and live the rest of your life as a champion"<span>~Muhammad Ali</span>',
  '"If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away" <span>~ Henry David Thoreau</span>',
  '"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky" <span>~Rabindranath Tagore</span>',
  '"Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart"<span>~ Marcus Aurelius</span>',
  '"Put your heart, mind, and soul into even your smallest acts. This is the secret of success" <span>~ Swami Sivananda</span>',
  '"The only way to discover the limits of the possible is to go beyond them into the impossible" <span>~Arthur C. Clarke</span>',
  '"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them" <span>~John F. Kennedy</span>',
  '"Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you" <span>~Nathaniel Hawthorne</span>',
  '"Learning how to be still, to really be still and let life happen - that stillness becomes a radiance" <span>~Morgan Freeman</span>',
  '"There are two ways of spreading light: to be the candle or the mirror that reflects it"<span>~ Edith Wharton</span>',
  '"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style" <span>~ Maya Angelou</span>',
  '"Change your thoughts and you change your world"<span>~ Norman Vincent Peale</span>',
  '"It is during our darkest moments that we must focus to see the light"<span>~Aristotle Onassis</span>',
  '"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you" <span>~ Ralph Waldo Emerson</span>',
  '"You have to dream before your dreams can come true"<span>~ A. P. J. Abdul Kalam</span>',
  '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart" <span>~Helen Keller </span>',

  '"Do every job you’re in like you’re going to do it for the rest of your life, and demonstrate that ownership of it"<span>~ Mary Barra</span>',
  '"Have those uncomfortable moments. Because my strong personal belief is it is those moments that cause you to grow the most yourself, but that also differentiate you the most in your career"<span>~ Corie Barry</span>',
  '"Just because you are CEO, do not think you have landed. You must continually increase your learning, the way you think, and the way you approach the organization. I have never forgotten that" <span>~ Indra Nooyi</span>',
  '"Innovation distinguishes between a leader and a follower" <span>~Steve Jobs, Apple co-founder</span>',
  '"The very essence of leadership is that you have to have vision. You cannot blow an uncertain trumpet" <span>~Theodore M. Hesburgh</span>',
  '"You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You must do the thing you think you cannot do" <span>~ Eleanor Roosevelt</span>',
  '"A genuine leader is not a searcher for consensus but a molder of consensus"<span>~Martin Luther King Jr.</span>',
  '"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change"<span>~Charles Darwin</span>',
  '"I start with the premise that the function of leadership is to produce more leaders, not more followers" <span>~Ralph Nader</span>',
  '"A good objective of leadership is to help those who are doing poorly to do well and to help those who are doing well to do even better" <span>~Jim Rohn</span>',
  '"If your actions inspire others to dream more, learn more, do more and become more, you are a leader" <span>~John Quincy Adams</span>',
  '"A great person attracts great people and knows how to hold them together" <span>~Johann Wolfgang Von Goethe</span>',
  '"Leadership is the art of giving people a platform for spreading ideas that work" <span>~Seth Godin</span>',
  '"A leader takes people where they want to go. A great leader takes people where they do not necessarily want to go, but ought to be" <span>~Rosalynn Carter</span>',
  '"Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others" <span>~Jack Welch</span>',
  '"Leadership and learning are indispensable to each other" <span>~John F. Kennedy</span>',
  '"No man will make a great leader who wants to do it all himself, or to get all the credit for doing it"<span>~Andrew Carnegie</span>',
  '"I do business with my heart as much as I do with my head, both personally and professionally" <span>~ Ursula Burns</span>',

  '"Good, better, best. Never let it rest. Til your good is better and your better is best" <span>~ St. Jerome</span>',
  '"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy" <span>~Norman Vincent Peale</span>',
  '"If you can dream it, you can do it" <span>~Walt Disney</span>',
  '"If you fell down yesterday, stand up today"<span>~H. G. Wells</span>',
  '"You will never win if you never begin" <span>~Helen Rowland</span>',
  '"Aim for the moon. If you miss, you may hit a star" <span>~ W. Clement Stone</span>',
  '"A creative man is motivated by the desire to achieve, not by the desire to beat others" <span>~Ayn Rand</span>',
  '"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious" <span>~Stephen Hawking</span>',
  '"I do not believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be" <span>~ Ken Venturi</span>',
  '"What you get by achieving your goals is not as important as what you become by achieving your goals" <span>~ Zig Ziglar</span>',
  '"Never give up, for that is just the place and time that the tide will turn" <span>~ Harriet Beecher Stowe</span>',
  '"Well done is better than well said" <span>~Benjamin Franklin</span>',
  '"Early to bed and early to rise makes a man healthy, wealthy and wise"<span>~ Benjamin Franklin</span>',
  '"If you are going through hell, keep going" <span>~Winston Churchill</span>',

  '"The great thing to remember is that though our feelings come and go God’s love for us does not" <span>~ C.S. Lewis</span>',
  '"You do not need to work to become spiritual. You are spiritual; you need only to remember that fact. Spirit is within you. God is within you" <span>~ Julia Cameron</span>',
  '"Spirituality is not about being fixed; it is about God being present in the mess of our unfixedness" <span>~ Michael Yaconelli</span>',
  '"God put us here on this carnival ride. We close our eyes, never knowing where it’ll take us next" <span>~ Carrie Underwood</span>',
  '"I sometimes get very angry at God, and I do not feel guilty about it, because the anger is an affirmation of faith. You cannot get angry at someone who is not there" <span>~ Madeleine L’Engle, The Irrational Season</span>',
  '"You cannot have a physical transformation until you have a spiritual transformation" <span>~ Cory Booker</span>',
  '"Nothing binds you except your thoughts; nothing limits you except your fear; and nothing controls you except your beliefs" <span>~ Marianne Williamson</span>',
  '"We are not human beings having a spiritual experience; we are spiritual beings having a human experience" <span>~ Pierre Teilhard de Chardin</span>',
  '"When you connect to the silence within you, that is when you can make sense of the disturbance going on around you" <span>~ Stephen Richards</span>',
  '"Quiet the mind and the soul will speak" <cite>~ Ma Jaya Sati Bhagavati</cite>',
  '"You have power over your mind not outside events. Realize this, and you will find strength" <span>~ Marcus Aurelius</span>',
  '"Be tolerant of those who are lost on their path. Ignorance, conceit, anger, jealousy, and greed stem from a lost soul. Pray that they will find guidance" <span>~ Elder Wisdom</span>',
  '"It does not matter how long you are spending on the earth, how much money you have gathered or how much attention you have received. It is the amount of positive vibration you have radiated in life that matters" <span>~ Amit Ray</span>',
  '"The unexamined life is not worth living" <span>~ Socrates</span>',
  '"You will never be able to escape from your heart. So it is better to listen to what it has to say" <span>~ Paulo Coelho</span>',
  '"A single event can awaken within us a stranger totally unknown to us. To live is to be slowly born" <span>~Antoine de Saint-Exupery</span>',
  '"If you lose money you lose much, if you lose friends you lose more, if you lose faith you lose all" <span>~ Eleanor Roosevelt</span>',
  '"The soul is placed in the body like a rough diamond and must be polished, or the luster of it will never appear" <span>~ Daniel Defoe</span>',
  '"The spiritual journey is the unlearning of fear and the acceptance of love" <span>~ Marianne Williamson</span>',
  '"God will not look you over for medals, degrees or diplomas but for scars" <span>~ Elbert Hubbard</span>',
  '"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it"<span> ~Bruce Lee.</span>',
];

const QuoteOfTheDayP = () => {
  const randomQuote = Math.round(Math.random() * successQuotesArr.length - 1);
  QuoteOfTheDay.innerHTML = successQuotesArr[randomQuote];
};
setInterval(QuoteOfTheDayP, 2000);
// 86400000

const digitalClock = () => {
  const dateNow = new Date();
  let sec = dateNow.getSeconds();
  let mins = dateNow.getMinutes();
  let hours = dateNow.getHours();
  let date = dateNow.toDateString();
  let pmam = "am"


if(hours> 12){
  hours -=12
  pmam = "pm"
}
if(hours >= 12){
  pmam = "pm"
}

if(sec< 10){
  sec = `0${sec}`
}
if(mins< 10){
  mins = `0${mins}`
}
if(hours< 10){
  hours = `0${hours}`
}


  const clock = `
<div class="date"> 
 ${date} 
</div>
<div class="time">
${hours} : ${mins} : ${sec} ${pmam}
</div>
`;
  clockContainer.innerHTML = clock;
  setInterval(digitalClock , 1000)
};

digitalClock();
