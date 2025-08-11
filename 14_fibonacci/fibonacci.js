const fibonacci = function (nth) {


    nth= Number(nth);
    if (nth < 0) return "OOPS";
    let a = 0;
    let b = 1;
    for (let i = 0; i < nth; i++) {
        [a, b] = [b, a + b];
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
