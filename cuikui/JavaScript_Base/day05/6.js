/*
//调用
fn();
//声明
function fn(){
  console.log('hello');
}
*/
//2.函数名和函数的返回值
/*
function myfun(){
  return 123;
}
//函数的调用结果-->函数的返回值。
myfun();
console.log(myfun());
*/
//3.函数作用域相关
/*
var num=0;
fn1();
function fn1(){   //----1级作用域----
  var num=1;
  fn2();          //fn2只能在所在的作用域中调用
  function fn2(){ //--2级作用域-----
    var num=2;
    fn3();
	function fn3(){//fn3只能在所在的作用域中调用
	  console.log(num);//--3级作用域--
	}
  }
}
*/


for(var i=1;i<=100;i++){  
  if(i%3==0){
    continue;  
  }  
console.log(i);
}










