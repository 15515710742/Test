//1.创建一个特效光环对象
var waveObj = function(){
    this.x = [];//光环的圆心半径 x y
    this.y = [];
    this.r = [];
    this.alive = [];//状态
}
//2.创建特效光环对象数量 10
waveObj.prototype.num = 10;
//3.特效光环对象的初始化方法
waveObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.r[i] = 0;
    }
}
//4.特效光环对象的绘制方法
waveObj.prototype.draw = function(){
    ctx1.save();
    ctx1.lineWidth = 2; //设置边框宽度
    ctx1.shadowBlur = 10; //设置阴影的宽度
    ctx1.shadowColor = "red";//设置阴影的颜色
    for(var i=0;i<this.num;i++){
        //当前光环活动;变大;变淡
        if(this.alive[i]){
            this.r[i] += deltaTime*0.05;
            if(this.r[i]>200){
                this.alive[i] = false;
                break;
            }
            var alpha = 1 - this.r[i]/200;
            ctx1.beginPath();
            ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
            ctx1.stroke();
        }
    }
    ctx1.restore();
}
//5.将wave.js添加index.html
//6.在main.js创建对象并调用相应方法
//7.添加出生新光环的方法
waveObj.prototype.born = function(x,y){
    //创建一个循环挑选一个不活动的光环
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            this.alive[i] = true;
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] =20;
            return;
        }
    }
}