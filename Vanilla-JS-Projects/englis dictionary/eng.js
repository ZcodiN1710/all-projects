const wordInputEl = document.getElementById("wordInput");
const wordTitle = document.querySelector(".wordTitle span");
const definitionEl = document.querySelector(".definition span");
const audio = document.querySelector("audio");
const meaningContainer = document.querySelector(".meaningContainer");
const pressEnter = document.querySelector(".pressEnter");

const fetchAPI = async (word) => {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const fetchData = await fetch(URL);
  const Data = await fetchData.json();
  console.log(Data);
  console.log(Data[0].word);
  console.log(Data[0].meanings[0].definitions[0].definition);
  console.log(Data[0].phonetics[0].audio);

  wordTitle.innerHTML = Data[0].word
  definitionEl.innerHTML = Data[0].meanings[0].definitions[0].definition
  audio.src = Data[0].phonetics[0].audio
};

const updateHTML = () => {
    meaningContainer.style.display = "block"
    pressEnter.style.display = "none"
}


wordInputEl.addEventListener("keypress", (eo) => {
  if (eo.target.value && eo.key === "Enter") {
    fetchAPI(eo.target.value);
    updateHTML()
  }
});
