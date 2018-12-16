<template>
    <div class="app_goodsinfo">
        <!-- 第一部分:商品的轮播区域 -->
        <div class="mui-card">
            <div class="mui-card-content">              
                <swiper-box :list="imagelist"></swiper-box>               
            </div>
		</div>      
        <!-- 第二部分:商品的购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{info.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>市场价:<del>¥{{info.p_old}}元</del>&nbsp;&nbsp;&nbsp;
                       销售价:<span class="now_price">¥{{info.p_now}}元</span>
                    </p>
                    <p>购买数量</p>
                    <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
                        <input class="mui-input-numbox" type="number" v-model="num"/>
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd">+</button>
                    </div>
                </div>                                          					
            </div>
            <div class="mui-card-footer">
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addCart">加入购物车</mt-button>                                        
                </p>
            </div>
		</div>
        <!-- 第三部分:商品的参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品的参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{info.p_sn}}</p>
                    <p>商品类型:{{info.p_type}}</p>
                    <p>商品尺寸:375 x 667</p>
                </div>                                          					
            </div>  
            <div class="mui-card-footer">按钮 图文介绍 商品评论</div>
		</div>
    </div>
</template>
<script>
    //导入图片轮播组件
    import swiper from "../subcomponents/swiper";
    //2.引入mui.min.js组件完成数字切换
    //由于mui.js与脚手架在严格模式下有冲突
    //import mui from "../../lib/mui/js/mui.js";
    export default {
        data(){
            return {
                imagelist:[],
                info:{},//保存当前商品详细信息
                num:1
            }
        },
        methods:{
            addCart(){
                //修改vuex
                this.$store.commit("increment",this.num);
            },
            goSub(){
                if(this.num<=1){return;}
                this.num = this.num -1;
            },
            goAdd(){
                if(this.num>=99){return;}
                this.num = this.num +1;
            },
            //获取当前商品数据
            findDetail(){
                //发送请求获取数据
                this.$http.get("goodslist/find").then(result=>{
                    //保存在info对象中
                    this.info = result.body;
                })
            },
            getImageList(){
                //获取图片轮播的数据
                var url="imagelist/list";
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        this.imagelist=result.body.msg;
                    }else{
                        //出错提示
                        Toast("加载轮播图片失败......")
                    }
                })
            }
        },
        created(){
            this.getImageList();
            this.findDetail();
        },
        components:{
            "swiper-box":swiper //注册子组件
        }
        
    }
</script>
<style>
.now_price{
    color:red;
    font-size:18px;
}
</style>