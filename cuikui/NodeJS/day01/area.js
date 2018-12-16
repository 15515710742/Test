//功能模块——求长方形的面积，周长
function getArea(a,b){
  //面积
  return a*b;
}
module.exports.getArea=getArea;
function getLength(a,b){
  //周长
  return 2*(a+b);
}
module.exports.getLength=getLength;
//exports和module.exports作用完全一致
console.log(exports);
console.log(module.exports);
console.log(exports===module.exports);

