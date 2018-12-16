<template>
    <div class="app_shop">
        <div class="mui-card">
            <div class="mui-card-header">添加购物车</div>
            <div class="mui-card-content" v-for="(item,i) in list" :key="item.id">
                <div class="mui-card-content-inner">
                    <p class="title">{{item.name}}</p>
                    <p>单价¥{{item.price}}</p>
                    <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="setSub(item.id)">-</button>
                        <input class="mui-input-numbox" type="number" :value="item.count"/>
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="setAdd(item.id)">+</button>
                    </div>
                </div>
            </div>
            <div class="mui-card-footer">
                <span>小计</span><span>¥{{getsubtotal}}</span>
            </div>
        </div>
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
            getCartlist(){
                this.$http.get("cartlist/list").then(result=>{
                    this.list = result.body.msg;
                })
            },
            setSub(id){
                for(var item of this.list){
                    if(item.id == id){
                        if(item.count<=1){
                            break;
                        }else{
                            item.count--;                            
                        }
                    }
                }
            },
            setAdd(id){
                //获取当前购物车的id,依据id将对对应的count自增操作
                for(var item of this.list){
                    if(item.id == id){                    
                        item.count++;
                    }
                }
            }
        },
        created(){
            this.getCartlist()
        },
        computed:{
            //计算属性 计算多个数据的变化
            getsubtotal:function(){
                var sum = 0;
                for (var item of this.list){
                    sum += item.price * item.count;
                }
                return sum;
            }
        }
    }
</script>
<style>
    .app_shop .mui-card .mui-card-content-inner .mui-numbox{
        margin-left:200px;
    }
    .app_shop .title{
        font-size: 16px;
    }
</style>
