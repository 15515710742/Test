// pages/userDetail/userDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
    */
    onReady: function () {
        var ctx =wx.createCanvasContext("can3");
        ctx.setStrokeStyle("#00ff00");//描边样式
        ctx.setLineWidth(3);          //描边的宽度
        ctx.rect(0,0,100,80);         //绘制矩形
        ctx.stroke();                 //描边
        //ctx.draw();                 //绘制(小程序)
        ctx.beginPath()
        ctx.setStrokeStyle("#f00");
        ctx.moveTo(50,50);            //移动到指定点
        ctx.setLineWidth(2);
        ctx.arc(50,50,15,0,2*Math.PI,true);
        ctx.stroke();
        ctx.draw(); 
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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})