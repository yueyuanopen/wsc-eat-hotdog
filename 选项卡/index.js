class Tab {
    constructor(el, options) {
        this.el = document.querySelector(el)
        this.init()
    }
    init() {
        this.titleOver()
            // 同步内容
        this.tbContent()
    }
    titleOver() {
        let ulLi = document.querySelector('ul li')
        ulLi.forEach((item, index) => {
            item.onmouseover = () => {
                this.el.querySelector('ul li.active').className = ''
            }
            ulLi[index].className = 'active'
        })
    }
    tbContent() {
        let olLi = document.querySelector('ol li')
        olLi.forEach((item, index) => {
            this.el.querySelector('ol li.active').className = ''
            olLi[index].className = 'active'
        })
    }
}