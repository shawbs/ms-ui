import Vue from 'vue'
class Dom {
    constructor () {
        this.$app = null
    }

    get App () {
        return this.$app || (this.$app = document.querySelector('#app'))
    }

    get page () {
        let page = document.querySelector('#app>.pages>[class*="-enter-active"].page')
        page = page || document.querySelector('#app>.pages>.page')
        return page
    }

    /**
     * 获取页面中的 popup-wrap
     * @returns {Element}
     */
    getPopupWrap () {
        let root = this.App
        let popupWrap = root.querySelector('.popup-wrap')
        if (!popupWrap) {
            popupWrap = document.createElement('div')
            popupWrap.classList.add('popup-wrap')
            root.appendChild(popupWrap)
        }
        return popupWrap
    }

    createPopupWrap () {
        let div = document.createElement('div')
        this.getPopupWrap().appendChild(div)
        return div
    }

    hasLoader () {
        let popupWrap = this.App.querySelector('.popup-wrap')
        let loader
        if (popupWrap) {
            loader = popupWrap.querySelector('.popup.loader-box')
        }
        return !!loader
    }

    showLoader () {
        if (!this.hasLoader()) {
            Vue.prototype.$loader && Vue.prototype.$loader.show()
        }
    }

    hideLoader () {
        setTimeout(() => {
            if (this.hasLoader()) {
                Vue.prototype.$loader && Vue.prototype.$loader.hide()
            }
        }, 1000)
    }
}

export default new Dom()
