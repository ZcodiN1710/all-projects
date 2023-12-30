const buttonEl = document.querySelector("button");
const quoteEl = document.querySelector(".quote");
const citeEL = document.querySelector("cite");
const quoteicons = document.querySelectorAll("i");
console.log(citeEL);
const Url = "https://api.quotable.io/random";

const displayUpdating = () => {
    quoteEl.innerHTML = "Updating...";
    citeEL.innerHTML =  "~Updating...";
};

const getQuote = async () => {
    displayUpdating()
  const fetchData = await fetch(Url);
  const data = await fetchData.json();
  console.log(data);
  console.log(data.author);
  console.log(data.author);
  console.log(data.content);
  quoteEl.innerHTML = data.content;
  citeEL.innerHTML = `~ ${data.author}`;
};

buttonEl.addEventListener("click", () => {
    getQuote()
  
})


