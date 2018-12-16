//一维数组
//var arr1 = ['tom','jerry','david'];
//二维数组
var arr2 = [
  ['北京','东城区','西城区','海淀区','朝阳区'],
  ['河北','石家庄','保定','张家口'],
  ['山东','济南','青岛','潍坊']
];
//console.log(arr2[2][2]);
//二维数组的遍历
//外层循环遍历第一层数组
for(var i=0;i<arr2.length;i++){
  //console.log(arr2[i]);
  //内层遍历第二层数组
  str = '';
  for(var j=0;j<arr2[i].length;j++){
    //console.log(arr2[i][j]);
    str += arr2[i][j];
  }
  console.log(str);
}

var arr2 = [
  ['北京','东城区','西城区','海淀区','朝阳区'],
  ['河北','石家庄','保定','张家口'],
  ['山东','济南','青岛','潍坊']
];


for(var i=0;i<arr2.length;i++){
  var str = '';
  for(var j=0;j<arr2[i].length;j++){
    str += arr2[i][j];
  
  }
  console.log(str);
}












