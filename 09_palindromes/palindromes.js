const palindromes = function (str) {
    const authorizedChar = "abcdefghijklmnopqrstuvwxyz0123456789";

    const pureStr = str
        .toLowerCase()
        .split('')
        .filter(char => authorizedChar.includes(char))
        .join('');
    return pureStr === pureStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
