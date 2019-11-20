import Vue from 'vue'
import main from './main'


const ComponentConstructor = Vue.extend(main)
var instance = null
const defaultOption = {
    visiablePopup: false,
    visiable: false,
    showCancelBtn: false,
    cancelBtnText: '取消',
    showConfirmBtn: true,
    confirmBtnText: '确认',
    showCloseBtn: false,
    title: '',
    message: '',
    showInput: false,
    inputType: 'text',
    inputValue: '',
    placeholder: '请输入',
    isClickOtherClose: true,

    callback: action => {
        console.log(action)
    },
    beforeClose: null
}

function Plugin(){}
function craeteInstance(){

    if (!instance){
        instance = new ComponentConstructor()
        const root = document.documentElement

        if (instance.$el) {
            root.appendChild(instance.$el)
        } else {
            root.appendChild(instance.$mount().$el)
        }
    }
    return instance
}

Plugin.alert = function(message, opt = {}) {
    instance = craeteInstance()
    opt = {...defaultOption, message, ...opt}
    for (let i in opt){
        instance[i] = opt[i]
    }
    instance.show()
}

Plugin.confirm = function(message, opt = {}) {
    instance = craeteInstance()
    opt = {
        ...defaultOption,
        message,
        showCancelBtn: true,
        ...opt
    }
    for (let i in opt){
        instance[i] = opt[i]
    }
    instance.show()
}

Plugin.prompt = function(message, opt = {}) {
    instance = craeteInstance()
    opt = {
        ...defaultOption,
        message,
        showCancelBtn: true,
        showInput: true,
        ...opt
    }
    for (let i in opt){
        instance[i] = opt[i]
    }
    instance.show()
}

export default Plugin