Page({
  data:{
    list: ['悦友圈', '好友圈', '校友圈'],
    activeIndex: 0,  
    showText:true,
    connmenText:'如果你读了王维的诗,王维似乎特别喜欢写空山,比如"空山x新雨后,天气晚来秋"；又比如"人闲桂花落,夜静春山空"如果你读了王维的诗,王维似乎特别喜欢写空山,比如"空山x新雨后,天气晚来秋"；又比如"人闲桂花落,夜静春山空"',
    // src:'',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'         
  },
  
  tab(e) {
    let id = e.currentTarget.dataset.index
    this.setData({
      activeIndex: id
    })
  },
  jumpComment(){
    wx.navigateTo({
      url: '/pages/comment/comment'
    })
  },
  changeShowmMre(){
    this.setData({
      showText: !this.data.showText
    })
  },
 
  // onReady(e) {
  //   // 使用 wx.createAudioContext 获取 audio 上下文 context
  //   this.audioCtx = wx.createAudioContext('myAudio')
  // },
  //事件处理函数
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {

  },
  onReady: function () {

  },
  onEnd: function () {
    console.log("播放结束")
  },
  onNext: function () {
    console.log("下一曲")
    this.setData({
      src: 'http://www.ytmp3.cn/down/51933.mp3'
    })
  },
  onLast: function () {
    console.log("上一曲")
    this.setData({
      src: 'http://www.ytmp3.cn/down/51933.mp3'
    })
  }

});