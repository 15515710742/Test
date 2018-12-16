var arr = [1,3,8,5,9];
//toString将数组转换成字符串
//var res = arr.toString();
//console.log(res);
//console.log(typeof(res));
//join拼接数组元素为字符串
//var res = arr.join('——');
//console.log(res);
//console.log(typeof(res));
//concat拼接数组
/*
var arr1 = [2,5,6];//相同元素不会合并
var arr2 = [10,11,12];
var res = arr.concat(arr1,arr2,15,52);
console.log(res);
*/
//slice截取数组元素
//var res = arr.slice(1,3);
//var res = arr.slice(-2);//倒数第几个
//console.log(res);
//splice修改数组（删除，替换，插入）
//var res = arr.splice(2);
//第一个参数删除开始的下标
//第二个参数是删除的个数
//var res = arr.splice(2,1);
//var res = arr.splice(2,2,10);//用10替换删除的两个元素
//插入
//var res = arr.splice(2,1,10);
//console.log(res);
//console.log(arr);

var book = ['水浒传','西游记','三国演义','红楼梦'];
var res1 = book.splice(0,0,'童年');
console.log(book);
var res = book.splice(2,1);
console.log(res);
console.log(book);

//reverse反转数组
//arr.reverse();
//console.log(arr);
//sort数组排序
//var arr1 = ['北京',10,'abc',56,32];
//arr1.sort();//改变原数组
//console.log(arr1);
/*
arr.sort(function(a,b){
  return a-b;//从小到大
//  return b-a;//从da到xiao
});
console.log(arr)
*/
//往数组中添加元素(最后)
//arr.push(60);
//在数组中删除元素（最后）
//arr.pop(9);
//console.log(arr);












