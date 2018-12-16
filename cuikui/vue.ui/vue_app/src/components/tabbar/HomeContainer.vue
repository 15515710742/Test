<template>
   <div class="app">

   <!--轮播图区-->
       <mt-swipe :auto="3000">
     <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
          <img :src="item.img" />
     </mt-swipe-item>
     </mt-swipe>
    <!--六宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
		                    <img src="../../img/menu1.png" />
		                    <div class="mui-media-body">新闻资讯</div>
                </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
		                   <img src="../../img/menu1.png" />
		                    <div class="mui-media-body" id="badge">商品
                        {{$store.getters.optCount}}</div>
                </router-link>
                        </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu2.png" />
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu4.png" />
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../img/menu4.png" />
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu5.png" />
		                    <div class="mui-media-body">Phone</div>
                        </a></li>

		        </ul>     
   </div>
</template>
<script>
import {Toast} from 'mint-ui';
   //页面加载成功后发送请求获取图片内容
   export default{
     data(){
       return {
         lunbotuList:[]
       }
     },
     created(){
          this.getLunbotu();
     },
     methods:{
       getLunbotu(){
this.$http.get("http://127.0.0.1/vue_ser/api/getlunbo.php").then(result=>{
             console.log(result.body);
             if(result.body.code  == 1){
                this.lunbotuList = result.body.message;
                console.log(this.lunbotuList);
             }else{
               Toast("加载轮播图失败...");
             }
        }); 
       }
     }
   } 

</script>
<style>
  .app .mint-swipe{
    height:200px;
  }
  .app .mint-swipe img{
    width:100%;
  }
  .app  .mui-grid-view.mui-grid-9{
     background-color:#fff;
     border:0;

    }
     /*移动端图片显示要是实现图片1半大小*/
    .mui-grid-view.mui-grid-9 img{
       width:60px;
       height:60px;
     }

     .mui-grid-view.mui-grid-9 .mui-media-body{
       font-size:13px;
     }

   .app .mui-grid-view.mui-grid-9 .mui-table-view-cell{
     border:0;
   }
</style>