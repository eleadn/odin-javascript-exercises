const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) ||
        num1 < 0 || num2 < 0)
    {
        return "ERROR";
    }
    
    let min = num1 <= num2 ? num1 : num2;
    let max = num1 > num2 ? num1 : num2;
    let result = 0;

    for (let i = min; i <= max; ++i)
    {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
