import Toast from './main.js'

Toast.install = function(Vue) {
    Vue.prototype.$toast = Toast.show
}
export default install