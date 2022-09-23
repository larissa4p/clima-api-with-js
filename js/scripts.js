// Variáveis e seleção de elementos
const apiKey = "01165a61b50a21f80a5adc05e7dd89c6";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

// Funções
const showWeatherData = (city) => {

  console.log(city)

}

// Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});
