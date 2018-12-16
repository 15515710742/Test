//continue和break的用法
for(var i=0;i<10;i++){
 //如果i为3的时候，跳出本次循环
  if(i==3){
    continue;
  }
  //当i为5的时候，终止循环
  if(i==5){
    break;
  }
  console.log(i);
}
/*
var sum = 0;
for(var i=1;i<=100;i++){
  sum += i;
  if(sum>4000){
    console.log(i);
	break;
  }
}
console.log(sum);
*/

for(var i=1;i<=100;i++){	
	if(i%3==0){   
	continue;
  }
  console.log(i);
}

/*
for(var i=2000;i<=2100;i++){
  if(i%4==0 && i%100!=0 || i%400==0){
  console.log(i);
  }
}
*/
/*
var money=10000;
for(var i=1;i<=5;i++){
  money = money+money*0.04
}
console.log(money);
*/


