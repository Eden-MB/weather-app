function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input");
  let city = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a2b7258ebd456c01aef9175dfe8b709&units=metric`;
  axios.get(apiUrl).then(showCity);
  console.log(apiUrl);
}
let form = document.querySelector("#searchCity");
form.addEventListener("submit", searchCity);

function showCity(response) {
  let temperatureID = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = response.data.name;
  temperatureID.innerHTML = temperature;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let describe = document.querySelector("#describe");
  describe.innerHTML = response.data.weather[0].description;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
}
