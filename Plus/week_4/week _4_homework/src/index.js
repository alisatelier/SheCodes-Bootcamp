let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let day = weekDay[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let dateToday = document.querySelector("#date-now");

if (minutes < 10) {
  minutes = `0${minutes}`;
}

dateToday.innerHTML = `${day} ${hours}:${minutes}`;

function citySubmit(event) {
  event.preventDefault();
  let enterCity = document.querySelector("#search-city");
  let h1 = document.querySelector("h1");
  let cityName = enterCity.value;
  h1.innerHTML = cityName;

  let key = "fo3a64f446f636fead1d860tcbcd7535";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${key}`;

  axios.get(apiUrl).then(showValue);
}

function showValue(response) {
  let cityTemp = Math.round(response.data.temperature.current);
  let tempNow = document.querySelector(".currentTempValue");
  tempNow.innerHTML = `${cityTemp}`;
}

let cityForm = document.querySelector("#city-input");
cityForm.addEventListener("submit", citySubmit);

//It was a CLASS VS ID Issue on line 37
