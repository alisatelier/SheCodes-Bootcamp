function isWindy(speed, unit) {
  if (speed > 5 && unit === "metric") {
    return true;
  } else {
    return false;
  }
}

function windyAlert(speed, unit) {
  if (isWindy(speed, unit)) {
    alert("It is windy");
  } else {
    alert("It is not windy");
  }
}

windyAlert(4, "metric");
windyAlert(12, "metric");
windyAlert(4, "imperial");
windyAlert(12, "imperial");
