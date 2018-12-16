
var d = new Date('2018/7/18');
//var birthday = new Date(d);
//birthday.setFullYear(year);
//console.log(birthdayYear);
if(d.getDay()==1){
  d.setDate(d.getDate()-2);
}
if(d.getDay()==2){
  d.setDate(d.getDate()-3);
}
if(d.getDay()==3){
  d.setDate(d.getDate()-4);
}
if(d.getDay()==4){
  d.setDate(d.getDate()-5);
}
if(d.getDay()==5){
  d.setDate(d.getDate()-6);
}

//console.log(birthdayYear+'年'+birthdayMonth+'月'+birthdayDate+'日');
console.log(d.toLocaleDateString());





