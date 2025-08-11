const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  
	return arr.reduce((sum,num)=>{
    return sum + num;
  },0);
};

const multiply = function(arr) {
  return arr.reduce((prod,num)=>{
    return prod * num;
  },1);
};

const power = function(num,times) {
  let product = 1;
	for (let i =1;i<=times;i++){
    product = product * num;
  }
  return product;
};

const factorial = function(num) {
  if( num ==0 ){
    return 1;
  }
	if( num ==1 ){
    return 1;
  }
  if ( num >1){
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
