//1.使用字面量对象创建

var book = {
  bname: '盗墓笔记',
  author: '南派三叔',
  pubTime: '2015-3-18'
}
//添加属性
book.page = 406;
book['pubname'] = '图灵出版社';
console.log(book);
//console.log(book.bname);
//console.log(book['author']);
/*
var person = {
  name:'崔奎',
  sex: '男',
  age: '18'
}
console.log(person);
*/
//2.使用new Object创建对象
//创建笔记本对象
var laptop = new Object();
//往对象中添加属性
laptop.color = 'black';
laptop.brand = 'Apple';
laptop['size'] = '15英寸';//[]里面必须加引号
//console.log(laptop);
//获取对象中的某一个属性
console.log(laptop['size']);
console.log(laptop.color);





