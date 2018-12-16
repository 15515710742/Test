var obj1={},obj2=[],obj3=new Date(),obj4={};
obj4.__proto__=Array.prototype;
function isArray(obj){
    //1.判断die:__proto__
    //return obj.__proto__==Array.prototype;
    //return Object.getPrototypeof(obj)==Array.prototype;
       //获取obj的原型对象
       //2.判断ma:constructor是不是Array
       //return obj.constructor==Array;
       //return obj instanceof Array;
       //obj(是)Array的实例吗?  实例类似于孩子
       //3.判断DNA:每个对象都有
       //return Object.prototype.toString.call(obj)=="[object Array]";
       //4.isArrayc       
       return Array.isArray(obj);//原理同第三种
}
console.log(isArray(obj1));//false
console.log(isArray(obj2));//true
console.log(isArray(obj3));//flase
console.log(obj1.toString());
console.log(obj2.toString());
console.log(obj3.toString());
console.log(obj4.toString());
console.log(Object.prototype.toString.call(obj1));
console.log(Object.prototype.toString.call(obj2));
console.log(Object.prototype.toString.call(obj3));
console.log(Object.prototype.toString.call(obj4));

