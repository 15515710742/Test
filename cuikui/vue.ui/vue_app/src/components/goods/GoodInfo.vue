<template>
<div  class="goodsinfo">
 <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

     <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						图片轮播
					</div>
				</div>
	</div>

	<div class="mui-card">
				<div class="mui-card-header">123</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                         <p class="price">
						 市场价:<del>100.00</del>
                         销售价<span class="now_price">110</span>
                         </p>
                          <p>
						 购买数量 
                            <numbox :max="obj.max"  @getcount="get1"></numbox>
                          </p>
                          <p>
                              <button>立即购买</button>
                              <button @click="addc">加入购物车</button>
                              
                          </p>
                                                 
					</div>
				</div>
	</div>



    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：11</p>
                        <p>商品货号：121</p>
                        <p>商品货号：13</p>
                        <p>商品货号：114</p>
                        
					</div>
				</div>
				<div class="mui-card-footer">
                    <button>图文介绍</button>
                    <button>商品评论</button>
                    
                </div>
	</div>
  </div>
</template>
<script>
 import numbox from "../subcomponents/goodinfo_numbox.vue";
  export default{
      data(){
          return {
              obj:{max:3},
              id:this.$route.params.id,
              ballFlag:false,
              selectedCount:1
          }
      },
      methods:{
        addc(){
            //console.log(0);
            //this.ballFlag = !this.ballFlag;
             this.$store.commit("increment");
        },
         goDesc(id){
             console.log(id);
         },
         goComment(id){
             console.log(id+"##");
         },
         get1(count){
             console.log(count);
         },
         beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;

      // 小球动画优化思路：
      // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
      // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()

      // 获取小球的 在页面中的位置
      console.log(this.$refs.ball);
      console.log(document.getElementById("badge"));
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
    

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },

      },
      components:{
          numbox
      }
  }
</script>
<style>
  .goodsinfo{
      background-color:#eee;
      overflow:hidden;
  }
  .goodsinfo .now_price{
      color:red;
      font-size:16px;
      font-weight:bold;
  }
  .mui-card-footer{
      display:block;
  }
  .mui-card-footer button{
      margin:15px 0;
  }
  .ball{
      width:15px;
      height:15px;
      border-radius:50%;
      background-color:red;
      position:absolute;
      z-index:99;
      top:390px;
      left:146px;
  }
</style>