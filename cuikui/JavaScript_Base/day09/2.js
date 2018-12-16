//var myDate = new Date(2018,8,1,10,30,50);
var myDate = new Date('2018/9/1 10:30:50');
//获取年月日，时分秒
var year = myDate.getFullYear();
console.log(year);
var month = myDate.getMonth();
console.log(month+1);
var date = myDate.getDate();
console.log(date);
var hour = myDate.getHours();
console.log(hour);
var minute = myDate.getMinutes();
console.log(minute);
var second = myDate.getSeconds();
console.log(second);
var milliSecond = myDate.getMilliseconds();
console.log(milliSecond);
var time = myDate.getTime();
console.log(time);
var day = myDate.getDay();
var arr = ['星期日','星期一','星期二','星期三',
'星期四','星期五','星期六'];
console.log(arr[day]);
//实现2018年9月1日  10:30:50
var str = '';
str +=year+'年'+month+'月'+date+'日'
+hour+':'+minute+':'+second+' '+arr[day]; 
console.log(str);






