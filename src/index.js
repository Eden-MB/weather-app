function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input");
  let city = searchInput.value;
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showCity);
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedenesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];

  let dateAndTime = document.querySelector("#dateTime");
  dateAndTime.innerHTML = `${day} ${hours}:${minutes},`;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
}
let form = document.querySelector("#searchCity");
form.addEventListener("submit", searchCity);

function showCity(response) {
  let temperatureID = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = response.data.city;
  temperatureID.innerHTML = temperature;
  let cc = document.querySelector(".cc");
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let describe = document.querySelector("#describe");
  describe.innerHTML = response.data.condition.description;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed}km/hr`;
  let iconElement = document.querySelector(".hey");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="hey" />`;
}
