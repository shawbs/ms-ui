import MsgBox from './main.js'

MsgBox.install = function(Vue) {
    Vue.prototype.$msgBox = MsgBox
    Vue.prototype.$alert = MsgBox.alert
    Vue.prototype.$confirm = MsgBox.confirm
    Vue.prototype.$prompt = MsgBox.prompt
}
export default MsgBox