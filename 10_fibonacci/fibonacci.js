const fibonacci = function(index) {
    if (index < 0)
    {
        return "OOPS";
    }

    let last = 1;
    let current = 0;

    for (let i = 0; i < index; ++i)
    {
        const cur = current;
        current += last;
        last = cur;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
