// var str="明明喜欢我,却不告诉我.别理我,我想静静,静静是谁?你先告诉我明明是谁?";
// var names=str.match(/明明|静静/g);
// console.log(`共找到${names.length}处`);
// console.log(`分别是${names}`);
var str="no zuo no die, no can no bibi";
//查询所有明明或静静
var names=str.match(/明明|静静/g);
//如果找到就输出个数,否则输出0
console.log(`共找到${names!=null ? names.length : 0}处`);
//如果找到,才显示结果
names!=null && console.log(`分别是${names}`);










