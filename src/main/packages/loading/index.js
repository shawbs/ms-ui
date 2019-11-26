import Loading from './main.js'
Loading.install = function(Vue) {
    Vue.prototype.$loading = Loading
}
export default Loading