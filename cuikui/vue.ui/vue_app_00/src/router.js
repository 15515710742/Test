import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//src/Router.js配置组件的访问器
//1:引入自定义组件
import HomeContainer from "./components/tabbar/HomeContainer"
import Vip from "./components/tabbar/Vip"
import Search from "./components/tabbar/Search"
import ShoppingCart from "./components/tabbar/ShoppingCart"
//引入自定义组件
import NewsContainer from "./components/news/NewsContainer"
import NewsDetailContainer from "./components/news/NewsDetailContainer"
import GoodList from "./components/goods/GoodList"
import GoodsInfo from "./components/goods/GoodsInfo"
Vue.use(Router)
//2:指定该组件的访问路径
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:HomeContainer},
    {path:"/home/newslist",component:NewsContainer},
    {path:"/home/goods",component:GoodList},
    {path:"/home/goodsinfo/:id",component:GoodsInfo,name:"goodsinfo"},
    {path:"/newsdetail/:id",component:NewsDetailContainer},    
    {path:"/vip",component:Vip},
    {path:"/search",component:Search},
    {path:"/shoppingCart",component:ShoppingCart}
  ],linkActiveClass:"mui-active"
})
