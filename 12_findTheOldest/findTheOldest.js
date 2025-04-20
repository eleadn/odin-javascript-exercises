const findTheOldest = function(people) {
    return people.sort(
        (a, b) =>
        {
            let aYearOfDeath = "yearOfDeath" in a ? a.yearOfDeath : new Date().getFullYear();
            let bYearOfDeath = "yearOfDeath" in b ? b.yearOfDeath : new Date().getFullYear();
            return aYearOfDeath - a.yearOfBirth > bYearOfDeath - b.yearOfBirth ? -1 : 1;
        }
    ).at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
