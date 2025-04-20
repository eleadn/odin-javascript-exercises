const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.length === 0 ? 0 : numbers.reduce((total, number) => total + number);
};

const multiply = function(numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((total, number) => total * number);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let result = 1;
  while (number > 1)
  {
    result *= number;
    --number;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
