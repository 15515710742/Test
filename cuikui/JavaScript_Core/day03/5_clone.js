var Lilei={
    sname:"Lilei",
    sage:11,
    intr:function(){
        console.log(`I'm ${this.sname},I'm ${this.sage}`);  
    }
}
//克隆一个对象
function clone(obj){
    var newObj={};//创建一个新的空对象
    //开始遍历obj中的每个属性
    for(var key in obj){
        //就为newObj添加一个同名的属性,值也相同
        newObj[key]=obj[key];
    }
    return newObj;
}
var Lilei2=clone(Lilei);
console.log(Lilei);
console.log(Lilei2);
Lilei.sage++;
console.log(Lilei);
console.log(Lilei2);
