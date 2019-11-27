import Vue from 'vue'
import main from './main'

const ComponentConstructor = Vue.extend(main)
var instance = null
const defaultOption = {
    show: true,
    message: '',
    isClickOtherClose: false, // 是否点击蒙层关闭toast
    align: 'center'
}

function Loading(){}

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

Loading.show = function(message="",opt){
    instance = craeteInstance()
    opt = {...defaultOption,message,...opt}
    for (let i in opt){
        instance[i] = opt[i]
    }
}

Loading.hide = function(){
    if (instance) instance.show = false
}

export default Loading
