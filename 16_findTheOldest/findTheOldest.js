const findTheOldest = function (arr) {
    return arr.reduce((oldest, current) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? current : oldest;
    })
};

function getAge(birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people));    
// Do not edit below this line
module.exports = findTheOldest;
