Page({
  data: {
    tablist: ['推荐书单','我的愿望','心愿排行榜'],
    booklist:[1,2,3,4,5,6,7,8,9],
    activeIndex:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //获取当前滑块的index
  changeTab (e) {
    this.setData({
      activeIndex: e.currentTarget.dataset.index
    })
  },
  tobook(){
    wx.navigateTo({
      url: '/pages/book/detail'
    })
    
  },
  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  }
 
})