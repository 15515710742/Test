于麻麻和鱼宝宝的游戏
1:目录结构
game:--所有游戏资源保存在此处
  js--保存所有js文件
    main.js   入口文件
    commonFunction.js  公共函数
    background.js  绘制背景图片

  (3)src 保存所有图片
  babyEye0.png-->babyEye1.png    2张(鱼的眼睛)
  babyFade0.png-->babyFade19.png 20张(鱼的身体)
  babyTail0.png-->babyTail7.png  8张(鱼的身体)
  background.jpg                 1张(大海背景)
  bigEye0-->bigEye7              8张(鱼的眼睛)
index.html启动网页


2:启动网页
  1.创建一个父元素div保存所有画布
  2.创建二个画布
    z-index:1 0
    <canvas>前[大鱼,小鱼,分数,特效]</canvas>
    <canvas>后[背景,食物,海葵]</canvas>
  3.修改画布
3:创建程序 js
4:分析海葵
  -50根
  -位置随机
  -高度(没有太高也没有太低)
  4.1:创建海葵专用文件 game/js/one.js
  4.2:创建海葵对象     oneObj
  4.3:创建属性保存个数  50
  4.4:创建海葵初始化方法 init
  4.5:创建海葵绘制方法   draw
  4.6:添加index.html
  4.7:在main.js中 创建对象并且调用相应的方法
5.食物
    -食物总量:30
  思路:
  -所有事物初始状态 false
  -创建函数监听画布如果当前食物活动数量少于15
  -出生[从false数组中找一个食物]
  -出生,随机位置,颜色,出生
6.大鱼 mom.js
  -大鱼的眼睛 大鱼的身体 大鱼的尾巴
  -大鱼的行为
  -游动(角度)
  -吃食物(碰撞检测)
