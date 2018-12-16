//do-while
/*do{
  //循环体
console.log(123);
}while(false);  //循环条件
*/
//使用do-while循环输出0~9
//初始值，范围，自增
/*var i=0;
do{
  console.log(i);
  i++;
}while(i<10);
*/
var pwd = 8888;
do{
  var upass = prompt('please input password');
  if(upass==pwd){
    alert('login success');
	break;
  }
}while(upass!=pwd);








