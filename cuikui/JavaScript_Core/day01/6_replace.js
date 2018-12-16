var str="we are from China";
str=str.replace(/\b[a-z]/ig,function(kw){
  return kw.toUpperCase();
});
console.log(str);