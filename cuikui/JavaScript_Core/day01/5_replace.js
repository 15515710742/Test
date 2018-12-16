var str="老师:请用小红,我的朋友造句.小明'小红是我的朋友.小亮说:朋友,小红是我的";
//var arr="we two who and who";
var arr=str.match(/小[\u4e00-\u9fa5]/g);
str=str.replace(/小[\u4e00-\u9fa5]/g,"小*");

console.log(`共找到:${arr!=null ? arr.length : 0}处`);
arr!=null && console.log(str);









