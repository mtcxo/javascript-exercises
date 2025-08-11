const palindromes = function (text) {
    let cleaned = text.replace(/[^a-z0-9]/gi, "");//onjly keeps letters and numbers
    let lowerCase = cleaned.toLowerCase();
    let reversed = "";
    for (let i = lowerCase.length - 1; i >= 0; i--) {
        reversed += lowerCase[i];
    }
    if (reversed == lowerCase) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
