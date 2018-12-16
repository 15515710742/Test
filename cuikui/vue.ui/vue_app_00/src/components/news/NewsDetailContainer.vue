<template>
    <div class="app_newsdetail">
        <!-- 新闻的详情页没有现成的组件 -->
        <h2 class="title">{{newsinfo.title}}</h2>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.ctime|dateFormat}}</span>
            <span>点击:{{newsinfo.click}}次</span>
        </p>
        <!-- 新闻的内容区域 -->
        <div class="container" v-html="newsinfo.content"></div>       
        <!-- 新闻的评论区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
    //导入评论子组件
    import comment from "../subcomponents/comment"
    export default{
        data(){
            return {
                id:this.$route.params.id,
                newsinfo:{} //保存当前新闻内容
            }
        },
        methods:{
            getDetail(){
                //获取新闻的详细内容
                var url="newslist/find?id="+this.id;
                this.$http.get(url).then(result=>{
                    this.newsinfo=result.body.msg[0];
                    //console.log(this.newsinfo)
                })
            }
        },
        created(){
            //console.log(this.$route.params.id)
            this.getDetail();
        },
        components:{
            "comment-box":comment //注册子组件
        }
    }
    //新闻id获取成功
    //发送ajax请求获取新闻返回结果
</script>
<style>
   .app_newsdetail{
       padding:0 4px;
   }
   .app_newsdetail .title{
       font-size:16px;
       text-align: center;
       margin:15px 0;
   }
   .app_newsdetail .subtitle{
       font-size: 13px;
       columns: #226aff;
       display: flex;
       justify-content:space-between;
       padding:0 10px;
   }
   .app_newsdetail .container img{
       width:100%;
   }

</style>