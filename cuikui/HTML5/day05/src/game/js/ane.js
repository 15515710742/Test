//4.1:创建海葵专用文件 game/js/one.js
  //4.2:创建海葵对象     oneObj
var aneObj = function(){
  //随机位置
  //this.x= [];
  //随机高度
  //this.len = [];
  //起点坐标;终点坐标;控制点坐标(计算结果)
  //摆动的幅动
  //正弦函数的角度
  this.rootx = [];//起点坐标;y值固定在画布的底部
  this.headx = [];//终点坐标x 周期性的变化
  this.heady = [];//终点坐标y
  //摆动幅动 0
  this.map = [];
  //正弦函数的角度 -1 1
  this.alpha = 0;
}
  //4.3:创建属性保存个数  50
aneObj.prototype.num = 50;
  //4.4:创建海葵初始化方法 init
aneObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        //每个海葵的位置,每个海葵的宽度为20
        //this.x[i] = i*16+Math.random()*20;
        //每个海葵的高度
        //this.len[i]=200+Math.random()*100;
        //初始化起点的坐标
        this.rootx[i]=i*16+Math.random()*20;
        //初始化终点的坐标 x[与起点相同]
        this.headx[i]=this.rootx[i];
        //初始化终点坐标y       
        this.heady[i]=canHeight-250+Math.random()*50; 
        //初始化摆动幅动
        this.map[i]=50+Math.random()*50;
    }
}
  //4.5:创建海葵绘制方法   draw
aneObj.prototype.draw = function(){
    //海葵随时间变化而改变的
    this.alpha += deltaTime * 0.0008;
    //值 -1  1
    var l = Math.sin(this.alpha);
    //保存画笔状态
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";//描边颜色
    ctx2.globalAlpha = 0.6;     //透明度
    ctx2.lineWidth = 20;        //宽度
    ctx2.lineCap = "round";     //圆角
    //创建循环
    for(var i=0;i<this.num;i++){
      //开始路径
      ctx2.beginPath();
      //移动起始点坐标
      ctx2.moveTo(this.rootx[i],canHeight);
      //计算终点坐标
      this.headx[i] = this.rootx[i]+l*this.map[i];
      //指定-->控制点坐标,终点
      ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);  
       //移到底端
      //ctx2.moveTo(this.x[i],canHeight);
      //向上绘制直线
      //ctx2.lineTo(this.x[i],canHeight-this.len[i]);
      ctx2.stroke();
    }
    //恢复画笔状态
   ctx2.restore();
    
    
}
  //4.6:添加index.html
  //4.7:在main.js中创建对象并且调用相应的方法