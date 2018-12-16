//为数组家所有子数组对象扩展一个新的功能:sum
Array.prototype.sum=function(){
    var arr=this;//指向将来调用sum()的"·"前面的数组
    var total=0;//定义变量,保存累加的和
    for(var i=0;i<arr.length;i++){//遍历当前数组
        total += parseFloat(arr[i]);
    }
    return total;//返回和
}
var arr1=[1,2,3,4,5],arr2=[6,7,8,9,10];
var sum1=arr1.sum();
var sum2=arr2.sum();
console.log(sum1,sum2);
