/*
function fn(num1,num2){
  console.log(arguments[3]);
  return num1+num2;
}
var res = fn(2,3,4,5);
console.log(res);
*/
/*
function fn(){
  console.log(arguments.length);
  return arguments[0]+arguments[1];`  
}
var res = fn(23,34);
console.log(res);
*/


var sum = 0;
function fn(){
  for(var proName in arguments){
    // console.log(proName+'--'+arguments[proName])];
     sum += arguments[proName];
  }
  
  return sum;
}
var res = fn(1,2,3,5);
console.log(res);





