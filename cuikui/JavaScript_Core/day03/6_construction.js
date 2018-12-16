//构造函数
//定义所有学生的统一结构:
//每个学生都必须会intr();
//1.定义构造函数,描述所有对象的统一结构
function Student(sname,sage){
    this.sname=sname;
    this.sage=sage;
    this.intr=function(){
        console.log(`I'm ${this.sname},I'm ${this.sage}`);
    }
}
//2.用new调用构造函数,反复创建多个相同函数的对象
var lilei=new Student("lilei","11");
var hmm=new Student("Han meimei","12");
console.log(lilei);
console.log(hmm);
lilei.intr();
hmm.intr();