// pages/my/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    jumpDetail(){
        wx.navigateTo({
            url: '/pages/my/detail?id=1'
        })
    },
    Jump(e){
        let type = e.target.dataset.type
        let url = ''
        switch (type) {
            case 'myForward':
                url = "/pages/my/attention?active=2"
                break;
            case 'forwardMe':
                url = "/pages/my/attention?active=3"
                break;
            case 'notice':
                url = "/pages/my/attention?active=2"
                break;
            case 'letter':
                url = "/pages/my/attention?active=2"
                break;
            case 'setInfo':
                url = "/pages/my/setInfo"
                break;
            case 'schoolFriend':
                url = "/pages/my/attention?active=0"
                break;
        }
        wx.navigateTo({
            url: url
        })
    },
    jumpRank(){
        wx.navigateTo({
            url: '/pages/my/rank'
        })
    },
    jumpSearch(){
        wx.navigateTo({
            url: '/pages/search/search'
        })
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