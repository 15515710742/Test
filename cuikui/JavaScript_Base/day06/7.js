//检测对象中是否含有某个属性
var person = {
  name: 'David',
  gender: '男',
  age: 20
}
//检测name属性是否在person对象中
//使用in关键字
console.log('name' in person);
//使用hasOwnProperty
console.log(person.hasOwnProperty('gender'));
//使用undefined
//判断属性是否为undefined
//不存在-->true, 存在-->false
//===要求值只能是undefined才满足条件
console.log(person.age === undefined);











