const round = (number) => {
  return Math.round(number * 10) / 10;
}
const ftoc = function(fahrenheit) {
  return round((fahrenheit - 32) * (5 /9));
};

const ctof = function(celsius) {
  return round(celsius * (9 / 5) + 32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
