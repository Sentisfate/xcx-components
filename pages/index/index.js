// index.js
// 获取应用实例
const app = getApp()

Page({
  data:{
    show:false
  },
  toggle(){
    this.setData({show:!this.data.show})
  },
  close(e,f){
    this.setData({
      show:false
    })
  }
})