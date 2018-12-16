//获取指定位置的字符
/*
var str = 'welcome to china';
var s = str.charAt(8);
console.log(s);

//身份证18数字(x)位组成
var num = '411527199212302031';
//通过身份证号查看性别，查看第17位数字，奇数为男。偶数为女
num = num.charAt(16);
if(num%2==0){
  console.log('女');
}else{
  console.log('男');
}
*/
//charCodeAt
//var str = 'hello 中国';
//console.log(str.charCodeAt(6));
//查询字符串的下标
var str = 'welcome to china';
console.log(str.indexOf('c'));
console.log(str.lastIndexOf('c'));


var email = '123456@qq.com';
var res = email.indexOf('@');
if(res != -1){
  console.log(true);
}else{
  console.log(false);
}











