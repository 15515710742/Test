<template>
    <div class="app-goods-list">
        <div class="app-goods-item" v-for="item in list" :key="item.id" @click="getDetail(item.id)">
            <img :src="item.img_url">
            <h4 class="title">{{item.title}}</h4>
            <div class="info">
                <p class="price">
                    <span class="old">¥{{item.p_old}}</span>&nbsp;&nbsp;
                    <span class="new">¥{{item.p_now}}</span>
                </p>
                <p class="sell">
                    <span><h5>热卖中</h5></span>
                    <span>剩{{item.sell}}件</span>
                </p>
            </div>
        </div>
        <mt-button type="primary" size="large">加载更多</mt-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
            getGoodsList(){
                this.$http.get("goodslist/list").then(result=>{
                    this.list = result.body.msg;
                    console.log(result);
                });
            },
            getDetail(id){
                this.$router.push({path:"/home/goodsinfo/"+id});
                //跳转方式
                //编程式导航一
                //this.$router.push("/home/goodsinfo")
                //编程式导航二
                //this.$router.push({path:"/home/goodsinfo"})
                //编程式导航三
                //this.$router.push({name:"goodsinfo"})
            }
        },
        created(){
            this.getGoodsList();
            //作业1学子商城--商品详情
            //跳转组件<router-link></router-link>
            //this.$route.push();
        }
    }
</script>
<style>
    .app-goods-list{
        display: flex;
        flex-wrap: wrap;
        padding:7px;
        justify-content: space-between;
    }
    .app-goods-list .app-goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin:4px 0;
        padding:2px;
        display: flex;/*商品内容也是弹性布局*/
        flex-direction: column;  /*布局方向垂直*/
        justify-content: space-between;
        min-height:200px;
    }
    .app-goods-list .app-goods-item img{
        width:100%;
        height:80px;
    }
    .app-goods-list .app-goods-item .title{
        font-size:14px;
    }
    .app-goods-list .app-goods-item .info{
        background: #eee;
    }
    .app-goods-list .app-goods-item .info p{
        margin:0;
        padding:5px;
    }
    .app-goods-list .app-goods-item .info .price .new{
        color:red;
        font-size: 16px;
        font-weight: bold;
    }
    .app-goods-list .app-goods-item .info .price .old{
        text-decoration: line-through;
        font-size:12px;
    }
    .app-goods-list .app-goods-item .info .sell{
        display: flex;
        font-size: 12px;
        justify-content: space-between;
    }
    .app-goods-list .app-goods-item .info .sell span h5{
        color:red;
    }
</style>