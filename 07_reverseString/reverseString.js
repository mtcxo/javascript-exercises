const reverseString = function(word) {
    let text =""
    for(let i=word.length-1;i>=0;i--){
        text += word.charAt(i)
    }
    return text;
};

// Do not edit below this line
module.exports = reverseString;
