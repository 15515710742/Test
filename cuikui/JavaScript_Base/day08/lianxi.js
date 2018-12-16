var emp=[
  {eid:1,ename:'ck',sex:'男',birthday:'1994-12-20',salary:5830,phone:'123456'},
  {eid:2,ename:'kk',sex:'女',birthday:'1992-12-30',salary:5730,phone:'123456'},
  {eid:3,ename:'jk',sex:'男',birthday:'1993-10-30',salary:6030,phone:'123456'}
];
/*
for(var key in emp){
  console.log(emp[key]);
}
*/
for(var i=0;i<emp.length;i++){
//数组中的元素emp[i]
//按照对象的访问形式
  var str='';
//把每个属性值都拼接到str中
  str += emp[i].eid+'-'+emp[i].ename+'-'+emp[i].sex+'-'+
	     emp[i].birthday+'-'+emp[i].salary+'-'+emp[i].phone
  console.log(str);
}


//输出a b c 三者中最大的一个
var a=5,b=10,c=1;
if(a>b){
  if(a>c){
    console.log(a);
  }else{
    console.log(c);
  }
}else{
  if(b>c){
   console.log(b);
  }else{
   console.log(c);
  }
}






var emp = [
  {eid:1,ename:'ck',sex:'男',age:20,salary:5000},
  {eid:2,ename:'lili',sex:'女',age:18,salary:6000},
  {eid:3,ename:'kk',sex:'男',age:22,salary:8000}
];

for(var i=0;i<emp.length;i++){
  var str = '';
  str += emp[i].eid+'-'+emp[i].ename+'-'+emp[i].sex+'-'+emp[i].age+'-'+emp[i].salary;
  console.log(str);
}


var a=10,b=20,c=4;
if(a>b){
  if(a>c){
    console.log(a);
  }else{
    console.log(c);
  }
}else{
  if(b>c){
    console.log(b);
  }else{
    console.log(c);
  }
}










