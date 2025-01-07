const convertToCelsius = function(fahrenheit) {
  let resultCelcius = ((fahrenheit -32) * (5/9));
  if (!Number.isInteger(resultCelcius)) resultCelcius = Math.round(resultCelcius * 10) / 10;
  return resultCelcius;
};

const convertToFahrenheit = function(celcius) {
  let num = 0
  let resultFahrenheit = ((celcius * (9/5) +32));
  if (!Number.isInteger(resultFahrenheit)) resultFahrenheit = Math.round(resultFahrenheit * 10) / 10;
  return resultFahrenheit;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
