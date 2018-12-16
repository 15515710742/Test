//函数格式化时间
function format(str){
//当前时间
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth()+1;
  var date = d.getDate();
//判断形参格式  
//yyyy-mm-dd或yyyy/mm/dd
  if(str=='yyyy-mm-dd'){
    return year+'-'+month+'-'+date;
  }else if(str=='yyyy/mm/dd'){
    return year+'/'+month+'/'+date;    
  }else{
    return year+'年'+month+'月'+date+'日';
  }
}
var res = format('yyyy/mm/dd');
console.log(res);








