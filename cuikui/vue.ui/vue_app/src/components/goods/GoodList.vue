<template>
   <div class="goods-list">
       <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="getDetail(item.id)">
           <img src="http://127.0.0.1/vue_ser/img/index/banner1.png" />
           <h1 class="title">{{item.t}}</h1>
           <div class="info">
              <p class="price">
                  <span class="now">${{item.s}}</span>
                  <span class="old">${{item.m}}</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩 {item.q}</span>
              </p>

           </div>

       </div>
        <button @click="getMore">加载更多</button>
   </div>
</template>
<script>
 export default {
     data(){
         return {
             goodslist:[{id:1,t:"123",s:10,m:1,q:0},
             {id:2,t:"456",s:9,m:10,q:0}],
             pno:1
         }
     },
     methods:{
       getDetail(id){
           this.$router.push("/home/goodsinfo/"+id);
       },
       getMore(){
           console.log(1111)
       }
     }
 }
</script>
<style>
   .goods-list{
       display:flex;
       flex-wrap:wrap;
       padding:7px;
       justify-content:space-between;
   }
   .goods-list .goods-item{
       width:49%;
       border:1px solid #ccc;
       box-shadow:0 0 8px #ccc;
       margin:4px 0;
       padding:2px;
       display:flex;
       flex-direction:column;
       justify-content:space-between;
       min-height:293px;
   }
   .goods-list .goods-item img{
        width:100%;
   }
   .goods-list .goods-item .title{
       font-size:14px;
   }
    .goods-list .goods-item  .info{
        background-color:#eee;
    }
    .goods-list .goods-item  .info p{
        margin:0;
        padding:5px;
    }
    .goods-list .goods-item  .info .price .now{
        color:red;
        font-weight:bold;
        font-size:16px;
    }    

     .goods-list .goods-item  .info .price .old{
        text-decoration:line-through;
        margin-left:10px;
        font-size:12px;
    }  
    .sell{
        display:flex;
        font-size:12px;
        justify-content:space-between;
    }    
</style>
