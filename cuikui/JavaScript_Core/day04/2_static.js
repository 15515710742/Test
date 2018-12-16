function Student(sname,sage){
    this.sname=sname;
    this.sage=sage;
}
Student.prototype.save=function(){
    console.log(`将${this.sname}保存到数据库中...`);
}
Student.getById=function(id){
    return new Student("韩梅梅",11);
}
var lilei=new Student("lilei",11);
//实例方法:必须用于对象才能调用的方法
lilei.save();//将李雷保存到数据库中去
//静态方法:没有获得子对象,才需要查找
var s101=new Student.getById(101);
console.log(`找到编号为101的学生为:${s101.sname}`);



















