const sumAll = function (a, b) {
    let sum = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    else {
        if (a > b) {
            [a, b] = [b, a];
        }
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
