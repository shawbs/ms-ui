import Vue from 'vue'
import main from './main'
import { Dom } from '@/utils'

const MainConstructor = Vue.extend(main)

class MessageBoxPlugin {
    constructor () {
        this.noTag = true
        this.names = 'messageBox'
        this.instance = new MainConstructor()
        this.option = {
            align: 'center',
            show: false,
            showCancelBtn: false,
            cancelBtnText: '取消',
            showConfirmBtn: true,
            confirmBtnText: '确认',
            showCloseBtn: true,

            errorText: '',

            showInput: false,
            inputType: 'text',
            inputValue: '',
            placeholder: '请输入',

            delayConfirm: 0, // 确定按钮倒计时
            delayConfirmTimer: 0,

            isClickOtherClose: false,
            validCallback: null,

            action: ''
        }
        this.option.callback = (action) => {
            console.log('callback:', action)
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
        this.instance.show = true
        return Promise.resolve(this.instance)
    }

    alert (message, title = '温馨提示', options) {
        return this.init({
            title,
            message,
            $type: 'alert',
            ...options
        })
    }

    confirm (message, title = '温馨提示', options) {
        return this.init({
            title,
            message,
            $type: 'confirm',
            showCancelBtn: true,
            ...options
        })
    }

    prompt (message, title = '温馨提示', options) {
        return this.init({
            title,
            message,
            $type: 'prompt',
            showCancelBtn: true,
            showInput: true,
            ...options
        })
    }
}

export default new MessageBoxPlugin()
