<template>
   <div class="cmt-contaner">
      <h1>发表评论</h1>
      <hr />
      <textarea placeholder="请输入内容" maxlength="120"
      v-model="msg"></textarea>
      <mt-button size="large" @click="postComment">发表评论</mt-button>
      <div class="cmt-list"  >
            <div class="cmt-item"  v-for="(item,i) in comments">
             <div class="cmt-title">
                 楼{{i+1}} 用户{{item.user_name}}
                 发表时间{{item.add_time}}
             </div>
            <div class="cmt-body">
               {{item.content === '' ? "此用户很懒":item.content}}
            </div>
            </div>
            <mt-button  @click="getMore">加载更多</mt-button>
      </div>
   </div>
</template>
<script>
  import {Toast} from "mint-ui"
  export default{
      data(){
          return {
              msg:"",
              comments:[],
              pageIndex:1}
      },
      methods:{
        postComment(){
            //获取评论
            if(this.msg.trim().length == 0){
                Toast("评论内容不能为空!");
                return;
            }
            console.log(this.id);
            this.$http.post("api/postcomment.php/"+this.id,{
                content:this.msg.trim()
            }).then((result)=>{
                var cmt = {
                    user_name:"匿名用户",
                    add_time:Date.now(),
                    content:this.msg.trim()
                };
                this.comments.unshift(cmt);
                this.msg = "";
                Toast("加载更多");
            });
        },
        getMore(){
            this.pageIndex++;
            this.$http.get("api/getcomments.php?id="+this.id+"&pno="+this.pageIndex).then(result=>{
                console.log(result);
                this.comments = this.comments.concat(result.body.message);
                Toast("获取成功")
            })
        }
      },
      props:["id"]
  }
</script>
<style scoped>
  .cmt-contaner h1{
    font-size:18px;
  }
  .cmt-contaner textarea{
      font-size:14px;
      height:85px;
      margin:0;
  }
   .cmt-contaner .cmt-list{
       margin:5px 0;
   }
   .cmt-contaner .cmt-list .cmt-title{
       line-height:30px;
       background:#ccc;
   }
   .cmt-contaner .cmt-list .cmt-body{
       line-height:35px;
       text-indent:2em;
   }   
</style>