var page = {
  total: 43,
  size: 9,
  pno: 1,
  prev:'<',
  next:'>'
}
page['color'] = 'blue';
page.pno = 2;
console.log(page);
//遍历
for(var proName in page){
  console.log(proName+':'+page[proName]);

}

