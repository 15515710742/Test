

//冒泡排序
var arr = [90,32,57,49,80];
//外层循环，控制的是循环轮数
for(var i=1;i<arr.length;i++){  //i代表轮数1 2 3 4
//内层循环，控制的是每一轮的轮数
  for(j=0;j<arr.length-i;j++){
    //j前边的元素的下标
	//j和下一个元素比较--j+1
	if(arr[j]>arr[j+1]){
	  //交换两个元素的值
	  var tmp = arr[j];
	  arr[j]=arr[j+1];
	  arr[j+1] = tmp;
	}    
  }
}
console.log(arr)








var arr = [10,5,2,3,15];
for(var i=1;i<arr.length;i++){
  for(var j=0;j<arr.length-i;j++){
    if(arr[j]>arr[j+1]){
	  var tmp = arr[j];
	  arr[j] = arr[j+1];
	  arr[j+1] = tmp;
	}
  }
}
console.log(arr);


arr.sort(function(a,b){
  return b-a;
});
console.log(arr);









