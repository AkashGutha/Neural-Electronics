module.exports = getBinaryRepresentation = function(number, max) {
  var result = "";
  while (number > 0) {
    var rem = number % 2;
    result = rem + result;
    if (number == 2) console.log(result);
    number = Math.floor(number / 2);
  }
  result =  result.padStart(max, "0");
  return result.slice(0, max);
};
