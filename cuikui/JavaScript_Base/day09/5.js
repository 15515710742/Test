//计算合同到期时间
//入职时间
var workTime = new Date('2012/6/30');
//合同到期时间
//复制一个入职时间
var targetTime = new Date(workTime);
//获取见合同的年份,+3表示到期的时间
var year = workTime.getFullYear()+3;
targetTime.setFullYear(year);
//续签时间——复制到期时间
var reworkTime = new Date(targetTime);
//提前一个月，设置月份在当前基础之上减1
reworkTime.setMonth(reworkTime.getMonth()-1);
//遇到周五，提前到上一个周五
//周六日期-1
if(reworkTime.getDay()==6){
  reworkTime.setDate(reworkTime.getDate()-1);
}
//周日 日期-2
if(reworkTime.getDay()==0){
  reworkTime.setDate(reworkTime.getDate()-2);
}
//提醒时间——复制签约时间
var remindTime = new Date(reworkTime);
//提前一周
remindTime.setDate(remindTime.getDate()-7);
//打印所有时间
console.log('入职时间为：'+workTime.toLocaleDateString());
console.log('合同到期时间为：'+targetTime.toLocaleDateString());
console.log('续签时间为：'+reworkTime.toLocaleDateString());
console.log('提醒时间为：'+remindTime.toLocaleDateString());






