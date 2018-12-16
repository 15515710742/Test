String.prototype.rtrim=function(){
    return this.replace(/\s+$/,"");
}
String.prototype.ltrim=function(){
    return this.replace(/^\s+/,"");
}
var ename="   zhang   dong    ";
console.log(`我的名字是|${ename.rtrim()}|`);//去掉结尾的空格
console.log(`我的名字是|${ename.ltrim()}|`);//去掉开头的空格