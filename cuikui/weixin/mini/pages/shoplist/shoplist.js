// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      shopList:[],
      pageIndex:0,
      pageSize:6,
      hasMore:true //用于记录加载更多
  },
  loadMore:function(){
      wx.request({
          url: "http://127.0.0.1:3000/product",
          data:{
              pno:++this.data.pageIndex,
              pageSize:this.data.pageSize
          },
          success: (res) => {
                //判断是否加载跟多
                var pageCount = res.data.pageCount;
                console.log(pageCount)
                if(this.data.pageIndex>=pageCount){
                    this.setData({ hasMore: false})
                }

                var rows = this.data.shopList.concat(res.data.data)
                this.setData({
                    shopList:rows
                })
          }
      })
  },
  onLoad: function (options) {
    this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      //显示第一页的数据,清空
      this.setData({
          pageIndex:0,
          shopList:[]
      });
      //加载更多
      this.loadMore();
      //停止下拉动作多次执行
      wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showDetail: function (e) {
      //自定义方法
      var pid = e.target.dataset.pid;
      console.log(pid);
      //跳转方式1:关闭当前页面
      //相对路径跳转 ../detail/detail
      //绝对路径跳转/page/detail/detail
    //   wx.redirectTo({
    //       url:"/pages/detail/detail",
    //   })
    //跳转方二: 保留当前的组件
    wx.navigateTo({
        url:"../detail/detail?pid="+pid,
    })
    //跳转方式3:没有组件限制
    // wx.redirectTo({
    //     url: '../detail/detail',
    // })
  }
})



