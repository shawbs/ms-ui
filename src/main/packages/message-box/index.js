import Vue from 'vue'
import main from './main'


const ComponentConstructor = Vue.extend(main)
var instance = null
const defaultOption = {
    visiablePopup: false,
    visiable: false,
    showCancelBtn: false,
    showConfirmBtn: true,
    showCloseBtn: false,
    title: '',
    message: '',
    showInput: false,
    inputType: 'text',
    inputValue: '',
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