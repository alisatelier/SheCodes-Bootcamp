let askCity = prompt("Enter a City");
let promptFormat = askCity.toLowerCase();
console.log(askCity);

function capitalizeAlert(city) {
  return city.charAt(0).toUpperCase() + city.slice(1);
}

console.log(promptFormat);
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

if (weather[promptFormat] !== undefined) {
  let temperature = weather[promptFormat].temp;
  let humid = weather[promptFormat].humidity;
  let tempCelcius = Math.round(temperature);
  let tempFar = Math.round(temperature * (9 / 5) + 32);
  let cityName = capitalizeAlert(promptFormat);

  alert(
    `It is currently ${tempCelcius}°C (${tempFar}°F) in ${cityName}, with a humidity of ${humid}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city. Try going to https://www.google.com/search?q=weather+${promptFormat}`
  );
}
