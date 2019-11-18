import Vue from 'vue'
import main from './main'

const ComponentConstructor = Vue.extend(main)
var instance = null

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
Plugin.show = function(){
    instance = craeteInstance()
    instance.show = true
}
Plugin.hide = function(){
    instance = craeteInstance()
    instance.show = false
}
export default Plugin
