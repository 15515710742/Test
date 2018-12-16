function Student(sname,sage){
    this.sname=sname;
    this.sage=sage;
}
//String.prototype
var lilei=new Student("李雷",20);
var hmm=new Student("韩梅梅",18);
var father={bal:100000000,car:"infinity"}
//hmm.__proto__=father;
Object.setPrototypeOf(hmm,father);
console.log(hmm.bal,hmm.car);
console.log(lilei.bal,lilei.car);
console.log(hmm);
console.log(lilei);










