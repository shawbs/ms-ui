import Vue from 'vue'
import main from './main'

const ComponentConstructor = Vue.extend(main)
var instance = null
const defaultOption = {
    show: true,
    message: '',
    time: 3000,
    timer: null,
    isClickOtherClose: true,
    align: 'center'
}

function ToastBox(){}

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

ToastBox.show = function(message="",opt){
    instance = craeteInstance()
    opt = {...defaultOption,message,...opt}
    for (let i in opt){
        instance[i] = opt[i]
    }
}

export default ToastBox
