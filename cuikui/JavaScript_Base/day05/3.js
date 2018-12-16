//带有返回值的函数声明和调用
/*
function calc(num1,num2){
//返回两个数字相加的结果。
  return num1+num2;
}
//调用
//调用后如何获取最终结果
var res = calc(3,5);
console.log(res);
*/
/*
function getMax(num1,num2){
 if(num1>num2){
    return num1;
  }else{
    return num2;
  }
//  return num1>num2 ? num1 : num2 ;
}
var res = getMax(20,10);
console.log('最大值为：' +res);
*/

function getMax(num1,num2,num3){
  var max=num1;
  if(num1>num2){
    max=num1;
  }else{
    max=num2;
  }
  if(max>num3){
    return max;
  }else{
    return num3;
  }
}
var res = getMax(30,10,15);
console.log(res);


function getMax(num1,num2,num3){
  var max = num1;
  max = num1>num2 ? num1 : num2;
  return max>num3 ? max : num3;
}
var res = getMax(20,5,15);
console.log(res);

/*
function isRun(year){
  return year%4==0 && year%100!=0 || year%400==0 ?'true' : 'false';  
}
var res = isRun(2000);
console.log(res);
*/
/*
function isRun(year){
  if(year%4==0 && year%100!=0 || year%400==0){
    return true;
  }
  return false;  
}
var res = isRun(2020);
console.log(res);
*/


function isRun(year){
  return year%4==0 && year%200!=0 || year%400==0 ? '闰年' : '非闰年';
}
var res = isRun(2010);
console.log(res);





