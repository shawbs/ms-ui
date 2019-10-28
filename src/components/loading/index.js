import Vue from 'vue'
import main from './main'
import { Dom } from '@/utils'

const MainConstructor = Vue.extend(main)

class LoaderPlugin {
    constructor () {
        this.noTag = true
        this.names = 'loader'
        this.instance = new MainConstructor()
        this.option = {
            show: false,
            message: '',
            time: 0,
            timer: null,
            callback: null,
            isClickOtherClose: true, // 是否点击蒙层关闭
            action: ''
        }
    }
    init (opt) {
        opt = { ...this.option, ...opt }
        if (this.instance.$el) {
            Dom.getPopupWrap().appendChild(this.instance.$el)
        } else {
            this.instance.$mount(Dom.createPopupWrap())
        }
        for (let i in opt) {
            this.instance[i] = opt[i]
        }
    }

    show (message = '') {
        this.init({
            message
        })
        this.instance.show = true
    }

    hide () {
        if (this.instance) {
            this.instance.show = false
        }
    }
}

export default new LoaderPlugin()
