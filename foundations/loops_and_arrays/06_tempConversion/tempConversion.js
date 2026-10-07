const convertToCelsius = function(temperatureInF) {
  //formula is C = (F - 32) / 1.8
  //convert the temperature
  let converted = (temperatureInF - 32) / 1.8;
  //round it to 1 decimal place
  let rounded = Math.round(converted * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temperatureInC) {
  //formula is F = (C * 1.8) + 32
  //convert the temperature
  let converted = (temperatureInC * 1.8) + 32;
  // then round it to 1 decimal place
  let rounded = Math.round(converted * 10) / 10;
  return rounded;
  };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
