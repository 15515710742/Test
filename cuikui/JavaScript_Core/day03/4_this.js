var Lilei={
    sname:"Lilei",
    sage:11,
    intr:function(){
        console.log(`I'm ${this.sname},I'm ${this.sage}`);//正确写法      
    }
}
var hmm={
    sname:"Han Meimei",
    sage:11
}
hmm.intr=Lilei.intr;
hmm.intr();//this临时-->.前的 hmm
Lilei.intr();//this临时-->.前的 Lilei

