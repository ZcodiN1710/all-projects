const randomHero = document.getElementById("randomHero");
const superHeroContainer = document.querySelector(".superHeroContainer");
const imgHero = document.querySelector(".imgHero");
const iconSearch = document.querySelector(".icon-search");
const searchBarValue = document.getElementById("searchBar");
const powerstatConatiner = document.querySelector(".powerstatConatiner");


/*==========================================*/
const SUPERHERO_TOKEN = "1366556204212281";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => { 
     const characterStats =  getStats(data)
      console.log(data);
      imgHero.innerHTML = `<img src="${data.image.url}">`;
      powerstatConatiner.innerHTML = `<p class = "characterName"> NAME: ${data.name}</p>${characterStats}`
    });
};


/*=======================================*/
const getStats = (chracter) => {
 const stats = Object.keys(chracter.powerstats).map(stat => {
   return `<p class="powerstat">${stat.toUpperCase()}: ${chracter.powerstats[stat]}</p>`
 })
    console.log(stats);
    return stats.join("")
}

/*=================================================================*/
const getSearchHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((data) => {
      const hero = data.results[0];
     const heroStats = getStats(hero)
      console.log(hero);
      imgHero.innerHTML = `<img src="${hero.image.url}">`;
      powerstatConatiner.innerHTML = `<p class = "characterName"> NAME: ${hero.name}</p>${heroStats}`
    });
};


/*==========================================*/
randomHero.addEventListener("click", () => {
  const randomID = Math.round(Math.random() * 731);
  getSuperHero(randomID);
});

searchBarValue.onkeyup = () =>  getSearchHero(searchBarValue.value)
    





