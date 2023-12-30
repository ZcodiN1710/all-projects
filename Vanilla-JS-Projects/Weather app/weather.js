const searchBar = document.getElementById("searchBar");
const searchBtnicon = document.getElementById("searchBtn");
const h2tag = document.querySelector("h2");
const weatherInfoContainer = document.querySelector(".weatherInfoContainer");
const weatheAppContainer = document.querySelector(".weatheAppContainer");
const apiKey = "877b8f82e9ba3a08d5863e163756d08d";

// /*===================================================================*/
searchBtnicon.addEventListener("click", () => {
  const cityInput = searchBar.value;
  getWeatherData(cityInput);
});
// /*=============================================================*/
const getWeatherData = async (cityInput) => {
  try {
    const fetchData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`
    );
    if (!fetchData.ok) {
      throw new Error("Network the fetchData was not ok");
    }
    const data = await fetchData.json();
    console.log(data);
    const name = data.name;
    const icon = data.weather[0].icon;
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity : ${data.main.humidity}%`,
      `Wind speed : ${data.wind.speed} m/s`,
    ];
    weatheAppContainer.querySelector("h2").textContent = name;
    weatherInfoContainer.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png ">`;
    weatherInfoContainer.querySelector(
      ".temp"
    ).innerHTML = `<h3 class="temp">${temp}<span>&#8451</span> </h3>`;
    weatherInfoContainer.querySelector(
      ".description"
    ).innerHTML = `<p class="description">${description} </p>`;
    weatherInfoContainer.querySelector(".weatherinfos").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatheAppContainer.querySelector("h2").textContent = "";
    weatherInfoContainer.querySelector(".icon").innerHTML = "";
    weatherInfoContainer.querySelector(".temp").innerHTML = "";
    weatherInfoContainer.querySelector(".description").innerHTML =
      "An error happened please try again";
    weatherInfoContainer.querySelector(".weatherinfos").innerHTML = "";
  }
};
