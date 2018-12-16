import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import ShopContainer from "./components/tabbar/ShopContainer.vue"
import NewsListContainer from "./components/news/Newslist.vue"
import NewsInfoContainer from "./components/news/NewsInfo.vue"
import Goodlist from "./components/goods/GoodList.vue"
import Goodinfo from "./components/goods/GoodInfo.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"}, 
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/search',component:SearchContainer}, 
    {path:'/cart',component:ShopContainer}, 
    {path:'/home/newslist',component:NewsListContainer}, 
    {path:'/home/newsinfo',component:NewsInfoContainer},  
    {path:'/home/goodslist',component:Goodlist},  
    {path:'/home/goodsinfo/:id',component:Goodinfo},    
    
  ],linkActiveClass:"mui-active" 
})
