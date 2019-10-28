import Loading from './loading'
import MessageBox from './messageBox'
import Container from './layout/container'
import Footer from './layout/footer'
import Header from './layout/header'
import Link from './link'
import Button from './button'
import Input from './input'
import Form from './form'
import FormItem from './form-item'
import Tabbar from './tabbar/tabbar'
import TabbarItem from './tabbar/tabbar-item'

const components = [
    Container,
    Footer,
    Header,
    Link,
    Button,
    Input,
    Form,
    FormItem,
    Tabbar,
    TabbarItem
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
    Vue.prototype.$MSAB = {
        prefix: 'ms',
        size: opts.size || 'Medium',
        zIndex: opts.size || 2000
    }
    Vue.prototype.$loading = Loading
    Vue.prototype.$messageBox = MessageBox
}

// 通过脚本引入安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Loading,
    MessageBox,
    Container,
    Footer,
    Header,
    Button,
    Input,
    Form,
    FormItem,
    Tabbar,
    TabbarItem
}
