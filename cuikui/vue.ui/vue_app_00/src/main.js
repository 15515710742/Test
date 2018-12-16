import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
import Vuex from "vuex" //引入vuex组件
Vue.use(Vuex)           //注册组件中所有内容
//创建vuex对象:共享,操作方法,获取并监听数据方法
var store = new Vuex.Store({
  state:{         //共享数据
    cartCount:0   //共享数据购物车中数量
  },  
  mutations:{     //操作共享数据方法
    increment(state,num){state.cartCount += num},
    substract(state){state.cartCount--},
    clearcount(state){state.cartCount=0}
  }, 
  getters:{       //获取并监听数据方法
    optCount:function(state){
      return state.cartCount;
    }
  }   
});
//1.引入Header组件
import {Header,Swipe,SwipeItem,Button} from "mint-ui";
//2.注册Header组件
//组件名称  组件对象
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
//3.引入VueResource到当前目录中
import VueResource from "vue-resource"
//4.加载VueResource
Vue.use(VueResource)
//5:定义全局(日期格式)过滤器
//5.1第三方模块 moment 过滤器日期
//自定义
//dateFormat 过滤器名称
//dateste 用户日期
Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
  return new Date(datestr).toLocaleString();
})
//设置全局的ajax访问的基础路径
Vue.http.options.root="http://127.0.0.1:3000/";
//6: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//7:全局设置post数据组织格式为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')