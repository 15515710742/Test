 // console.log(res);
  //将第一个楼层的h3和res对象绑定起来
  var vm=new Vue({
    el:"#main>div:nth-child(2)>h3:first-child",
    data:{
      res:[//为了保证首次加载前不报错,必须给数据初始值
        {title:"",details:"",price:0},
        {title:"",details:"",price:0},
        {title:"",details:"",price:0}
      ]
    },
    created(){
      //this-->当前vue
      (async function(self){
          var res=await axios.get("http://localhost:3000/index/");              
          self.res=res.data;
          var cloaks=document.querySelectorAll("[cloak]") ;
          for(var c of cloaks){
            c.removeAttribute("cloak")
          }
      })(this) //将this通过实参的形式传入进去
    }
});

