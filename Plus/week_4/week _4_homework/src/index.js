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

dateToday.innerHTML = `${day} ${hours}:${minutes}`;

function citySubmit(event) {
  //works
  event.preventDefault();
  let enterCity = document.querySelector("#search-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${enterCity.value}`;
}

let cityForm = document.querySelector("#city-input"); //works
cityForm.addEventListener("submit", citySubmit);

let key = "fo3a64f446f636fead1d860tcbcd7535";
let query = document.querySelector("h1"); // Where I am stuck. I need city to be the result of what is entered into the form.

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}`;

function showValue(response) {
  //DOES NOT WORK. Even When query is set to 'Paris'
  let cityTemp = Math.round(response.data.temperature.current);
  let tempNow = document.querySelector("#currentTempValue");
  tempNow.innerHTML = `${cityTemp}`;
}
axios.get(apiUrl).then(showValue);
