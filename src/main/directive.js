import Vue from 'vue'

Vue.directive('append-to-body', {
    inserted: (el, binding) => {
        if (el && el.parentNode){
            document.body.appendChild(el)
            // el.parentNode.removeChild(el)
        }
    }
})