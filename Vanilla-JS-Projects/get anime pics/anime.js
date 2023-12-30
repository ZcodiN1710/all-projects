const buttonEl = document.querySelector("button");
const imgEl = document.querySelector("img");
const nameEl = document.querySelector(".name");
const animeCharacter = document.querySelector(".animeCharacter");


// const apiUrl = ""


const getAnimePic = async () => {
    imgEl.innerHTML = "updating..."
    nameEl.innerHTML = "updating..."
//   const fetchData = await fetch("https://api.catboys.com/img");
//   const data = await fetchData.json();
//   console.log(data);
animeCharacter.style.display = "block"
};

buttonEl.addEventListener("click", getAnimePic);
