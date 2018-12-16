/*
var emp =['eid','ename','sex','birthday','salary','phone'];
for(var i=0;i<emp.length;i++){
  console.log(emp[i]);
}
*/
//存储多个员工的信息
//索引数组
//var arr1 = ['tom','jerry','david'];
//访问数组元素使用数字作为下标
//var res = arr1[0]
//console.log(res);
//关联数组
/*
var arr2 = new Array();
arr2['name'] = 'scot';
arr2['age'] = 20;
arr2['sex'] = '男';
console.log(arr2);
for(var key in arr2){
  console.log(key+'--' + arr2[key]);
}
*/
//练习1：声明函数，在函数中传递参数(数组)，
//获取传递数组中的最大值并返回.
//1

function getMax(arr){
 //假设第1个数组元素为最大值
  var max = arr[0];
  for(var i=1;i<arr.length;i++){
    if(arr[i]>max){
      max = arr[i];
	}
  }
  return max;
}
console.log(getMax([80,200,33,100,15,500,10]));
//2
function getMin(arr){
  var min = arr[0];
  for(var i=1;i<arr.length;i++){
    if(arr[i]<min){
	  min = arr[i];
	}    
  }
  return min;
}
var res =getMin([10,2,3,4,5]);
console.log(res);
//3
function getIndex(arr,value){
  for(i=0;i<arr.length;i++){
    if(value==arr[i]){
      return i;
	}
  }
}
console.log(getIndex([5,20,18,13,72],18));

//4.九九乘法表
/*
for(var i=1;i<=9;i++){
  var str =''; 
  for(var j=1;j<=i;j++){
     str += j+'x'+i+'='+i*j+' ';
  }
console.log(str)
}
*/



















