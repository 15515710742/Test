//李雷,年龄11,会自我介绍:I`m Lilei,I`m 11
var Lilei={
    sname:"Lilei",
    sage:11,
    intr:function(){
        console.log(`I'm ${this.sname},I'm ${this.sage}`);//正确写法
        //console.log(`I'm ${Lilei.sname},I'm ${Lilei.sage}`);
    }
}
console.log(Lilei.sage);
Lilei.intr();
Lilei.sage++;
console.log(Lilei.sage);
Lilei.intr();