const removeFromArray = function(arr,...num) {
    return arr.filter( val => !num.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
