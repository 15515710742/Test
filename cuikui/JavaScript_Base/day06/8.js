//对象中的方法
/*
var person = {
  name:'Tom',
  age:20,
//方法：匿名函数
  sayHi: function(){
//  console.log('hello world');
//在成员方法访问成员属性
    console.log('我叫'+this.name);  
  }
}
//访问对象中的方法
person.sayHi();
*/

var circle = {
  r: 100,
  PI: 3.14,
  getLength:function(){
    console.log('周长：'+this.r*this.PI*2);
  },
  getArea:function(){
    console.log('面积：'+this.r*this.r*this.PI);
  }  
}
circle.getLength();
circle.getArea();





