//2018/7/17
var myDate = new Date('2018/10/1');
var now = new Date();
var time1 = myDate.getTime();
var time2 = now.getTime();
res = (time1-time2)/1000;
res = Math.floor(res);
//转成天数
var days = res/(24*60*60); 
days = Math.floor(days);
//console.log(days);
//用剩余的秒数除以3600
var hours = res%(24*3600)/(3600);
hours = Math.floor(hours);
//剩余的分钟
var minutes  = res%3600/60;
minutes = Math.floor(minutes);
var seconds = res%60;
console.log('距离国庆节放假还有'+days+'天'+hours+'时'+minutes+'分'+seconds+'秒');







