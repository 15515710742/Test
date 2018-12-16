//完成碰撞检测
//1.大鱼碰撞食物
//1.1创建全局函数 momFruitsCoolsion(){}
//功能:检测大鱼与所有的食物是否发生了碰撞
function momFruitsCollsion(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            //计算两个对象之间的坐标差
           var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l<900){  //小于30像素
                //1.当前食物消失
                fruit.alive[i] = false;
                //2.增长分数
                if(fruit.fruitType[i]=="orange"){
                    data.double = 2;
                }else{
                    data.double = 1;
                }
                data.addScore();
                wave.born(fruit.x[i],fruit.y[i]);
            }
        }
    }
}
//1.2将collsion.js添加index.js
//1.3在main.js  函数添加gameloop
//2.大鱼碰撞小鱼
