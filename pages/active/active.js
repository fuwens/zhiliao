Page({
    data: {
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
    //获取当前滑块的index
    toDetail (e) {
        wx.navigateTo({
            url: '/pages/active/detail'
        })
    }
   
  })