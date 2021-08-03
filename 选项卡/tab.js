function Tab(el, options= {}) {
  // this tab1 tab2
  this.el = document.querySelector(el)

  this.init()
}


Tab.prototype.init = function() {
  // this tab1 tab2
  // 功能
  // 标题移入
  this.titleOver()
  // 同步内容
  // this.tbContent()
  this.tbContent(0)
}


Tab.prototype.titleOver = function() {
  // this tab1 tab2
  // 1 获取【当前】所有ul li
  // let ulLiObjs = document.querySelectorAll('ul li')
  let ulLiObjs = this.el.querySelectorAll('ul li')
  // 2 遍历 绑定移入事件
  ulLiObjs.forEach((item, index)=>{
    // item.onmouseover = function() { // this 事件源
    item.onmouseover = () => { // this tab1 tab2
      // 3 事件处理函数  清除className
      ulLiObjs.forEach(item2 => {
        item2.className = ''
      })
      // 3 事件处理函数中 给自己加
      // ulLiObjs[??].className = 'active'
      ulLiObjs[index].className = 'active'

      // 同步内容
      this.tbContent(index)
    }
  })
}
Tab.prototype.tbContent = function(index) {
    // 获取【当前】所有ol li
    let olLiObjs = this.el.querySelectorAll('ol li')
    // 1 清除所有className
    olLiObjs.forEach(item => {
      item.className = ''
    })
    // 2 给自己加
    // olLiObjs[????].className = 'active'
    olLiObjs[index].className = 'active'
}
