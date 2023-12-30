const buttonEl = document.querySelector("button");
const nameEl = document.querySelector("p");
const apiKey = "e6299b3a06a6157546d30ba763cdfed7a1183edb";


const emoji = []

const getEmoji = async () => {
  const fetchData = await fetch("https://emoji-api.com/emojis?access_key=e6299b3a06a6157546d30ba763cdfed7a1183edb");
  const data = await fetchData.json();
//   console.log(data);
  for (let i = 0; i<1500; i++){
    emoji.push({
        emojiCharacter: data[i].character,
        emojiName: data[i].unicodeName
    })
  }

};


getEmoji();

buttonEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random()*emoji.length)
    buttonEl.innerText = emoji[randomNum].emojiCharacter
    nameEl.innerText = emoji[randomNum].emojiName
});
