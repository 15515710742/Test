//调用3次
var i=1;
function say(){
  alert('long long ago');
  i++;
//当大于3的时候,跳出（终止函数）
  if(i>3){
    return;
  }
 say();
}
say();












