const inputEls = document.querySelectorAll("input");
const celciusEl = document.getElementById("celciusInput");
const fahrenheitEl = document.getElementById("fahreheitInput");
const KelvinEl = document.getElementById("kelvinInput");

inputEls.forEach((inputEl) => {
  inputEl.addEventListener("change", (eo) => {
    const currentValue = +eo.target.value;

    switch (eo.target.name) {
      case "Celcius":
        fahrenheitEl.value = (currentValue * 273.32).toFixed(2);
        KelvinEl.value = (currentValue * 1.8 + 32).toFixed(2);
        break;
      case "fahrenheit":
        celciusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
        KelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
        break;
      case "Kelvin":
        celciusEl.value = currentValue - 273.32;
        fahrenheitEl.value = ((currentValue - 273.32) / 1.8 + 32).toFixed(2);
        break;
      default:
        break;
    }
  });
});
