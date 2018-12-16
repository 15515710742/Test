//员工对象
/*
var emp = {
  eid: 1,
  ename: 'Tom',
  birthday: '1993-2-15',
  gender: '男',
  phone: '13030508745',
  add: 'beijing'
}
//遍历对象
//proName表示遍历的所有属性
//in后表示所要遍历的对象
for(var proName in emp){
  console.log(proName+'——'+emp[proName]);
}
*/
var car = {
  brand:'玛莎拉蒂',
  price:'500万',
  color:'red',
  country:'China',
  type:'超跑'  
}
car.size = '2.55m';
for(var proName in car){
  console.log(proName + '：'+car[proName]);
}










