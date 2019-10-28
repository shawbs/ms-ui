import Vue from 'vue'
import main from './main'
import { Dom } from '@/utils'

const ComponentConstructor = Vue.extend(main)

class ToastPlugin {
    constructor () {
        this.option = {}
        this.noTag = true
        this.names = 'toast'
        this.instance = new ComponentConstructor()
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
        return this.instance
    }

    show (message = 'toast', opt) {
        this.init({
            _type: 'toast',
            show: true,
            time: 3000,
            message,
            ...opt
        })
    }
}

export default new ToastPlugin()
