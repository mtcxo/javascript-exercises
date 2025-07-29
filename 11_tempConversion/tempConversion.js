const convertToCelsius = function (fah) {
  let cel = (fah - 32) * 5 / 9;
  return Number(cel.toFixed(1));
};

const convertToFahrenheit = function (cel) {
  let fah = (cel * 9 / 5) + 32;
  return Number(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
