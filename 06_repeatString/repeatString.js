const repeatString = function(word,times) {
  if ( times < 0) return "ERROR"
  let text = ""
  for (let i = 0; i<times;i++){
    text+=word
  }
  return text
};

// Do not edit below this line
module.exports = repeatString;
