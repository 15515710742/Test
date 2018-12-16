//遍历数组
var arr = ['张飞','关羽','马超','赵云','黄忠'];
//使用for-in 遍历
/*
for(var proName in arr){
  console.log(proName+':' +arr[proName]); 
}
*/
//使用for循环遍历，通过数组的下标来遍历数组
for(var i=0;i<arr.length;i++){
  console.log(arr[i]);
}

var emp = [1,'tom','男','1993-3-1',5000,'13512345678'];
for(var i=0;i<emp.length;i++){
  console.log(emp[i]);
}



