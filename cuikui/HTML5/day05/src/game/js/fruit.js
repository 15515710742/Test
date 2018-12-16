//1.创建食物类
var fruitObj = function(){
    this.alive = [];  //是否活动 bool类型
    this.orange = new Image();  //二张图片
    this.blue = new Image();
    this.x = [];  //食物坐标
    this.y = [];
    this.l = [];  //食物的长度(有小变大)
    this.spd = []; //生成,漂浮
    this.fruitType = [];  //blue orange
}
//2.添加属性食物数量
fruitObj.prototype.num = 30;
//3.添加食物初始化方法
fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.spd[i] = Math.random()*0.017 + 0.03;
        this.fruitType[i] = Math.random()<0.8 ? "blue" : "orange";
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
}
//4.添加方法食物绘制
fruitObj.prototype.draw = function(){
    for(var i=0;i<this.num;i++){
        //查找食物,活动 变大 向上漂浮
        if(this.alive[i]){ //如果当前的食物是活动状态的
            if(this.l[i]<14){
                this.l[i] += this.spd[i]*15; //生长
            }else{
                this.y[i] -= this.spd[i]*18; //向上漂浮
            }       
            if(this.fruitType[i]=="blue"){
                var pic = this.blue;
            }else{
                var pic = this.orange;
            }
            ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            //浮出屏幕
            if(this.y[i]<10){
                this.alive[i] = false;
            }
        }
    }
}
//5.将fruit.js加载index.html
//6.在main.js 创建对象并且调用相应的方法
//7.创建全局变量,监听画布食物数量,不足15个活动出生
function fruitMonitor(){
    var sum = 0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]) sum++;
     }   
    if(sum<15){
        sendFruit();
        return;
    }
}
//8.创建全局变量,从食物中条选一个不活动食物
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}
//9.为食物类中添加方法,出生[状态;宽度;类型;x;y]
fruitObj.prototype.born = function(i){
    //查找一个海葵,在海葵的头顶出生
    var aneID = Math.floor(Math.random()*ane.num);
    //this.x[i] = ane.x[aneID];
    //this.y[i] = canHeight - ane.len[aneID];
    this.x[i] = ane.headx[aneID];
    this.y[i] = ane.heady[aneID];
    this.l[i] = 0;
    this.alive[i] = true;
    this.fruitType[i] = Math.random() < 0.8 ? "blue" : "orange";
}
//10 在main.js中调用fruitMonitor方法