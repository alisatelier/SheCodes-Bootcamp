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
  event.preventDefault();
  let enterCity = document.querySelector("#search-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${enterCity.value}`;
}

let cityForm = document.querySelector("#city-input");
cityForm.addEventListener("submit", citySubmit);
