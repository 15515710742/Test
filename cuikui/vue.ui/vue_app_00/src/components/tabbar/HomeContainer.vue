<template>
    <div class="app">
        <!-- 主页的组件HomeContainer.vue -->
        <!-- 1:轮播图 -->      
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url">
            </mt-swipe-item>
        </mt-swipe>       
        <!-- 2:六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu1.png">
                    <div class="mui-media-body">定位</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goods">
                    <img src="../../img/menu2.png">
                    <div class="mui-media-body">商品</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu6.png">
                    <div class="mui-media-body">订单</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu4.png">
                    <div class="mui-media-body">支付</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../img/menu5.png">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu3.png">
                    <div class="mui-media-body">购物车</div></a></li>
        </ul>
    </div>
</template>
<script>
    //加载当前组件需要第三方模块
    import {Toast} from "mint-ui";
    export default{
        data(){
            return {
                list:[]
            }
        },
        methods:{
            getImageList(){
                //获取图片轮播的数据
                var url="http://127.0.0.1:3000/imagelist/list";
                this.$http.get(url).then(result=>{
                    //node.js 发送json字符串
                    //通过vueresource接受自动将json字符串转换
                    //js对象
                    //将图片宽度修改;添加六宫格
                    if(result.body.code==1){
                        this.list=result.body.msg;
                    }else{
                        //出错提示
                        Toast("加载轮播图片失败......")
                    }
                })
            }
        },
        created(){
            this.getImageList();
        }
    }
</script>
<style>
    .app .mint-swipe{
        height:150px;  
    }
    .app .mint-swipe img{
        width:100%;
    }
    .app .mui-grid-view.mui-grid-9 img{
        width:60px;
        height:60px;
    }
    .app .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;
        background: #fff;
    }

</style>