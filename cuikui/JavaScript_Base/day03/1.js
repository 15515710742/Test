//if语句
/*var score = 606;//语句1
if(score >= 600){   //逻辑表达式
  console.log('恭喜你');//语句2
  console.log('被我校成功录取');
}
console.log('查询结束');//语句4
*/
var price = prompt('please input price');
var num = prompt('please input number');
var res = price*num;
//如果商品总价超过500，则打八折
if(res>=500){
   res *= 0.8;
}
//弹出总价
alert('应付金额：'+res);
//顾客给钱，计算找零
var money = prompt('please input money');
if(money>=res){
  alert('应找零：' +(money - res));
}else{
  alert('余额不足');
}



