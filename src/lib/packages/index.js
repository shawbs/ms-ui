import Loading from './loading'
import MsgBox from './message-box'
import Container from './layout/container'
import Footer from './layout/footer'
import Header from './layout/header'
import MsPage from './layout/page'
import Link from './link/main'
import Button from './button/main'
import ButtonGroup from './button-group/main'
import Input from './input/main'
import Form from './form/main'
import FormItem from './form-item/main'
import Tabbar from './tabbar/tabbar'
import TabbarItem from './tabbar/tabbar-item'
import Popup from './popup/main'
import Toast from './toast'
import Icon from './icon/main'
import Img from './img/main'
import Row from './row/main'
import Col from './row/col'
import Radio from './radio/main'
import RadioGroup from './radio/group'
import Checkbox from './checkbox/main'
import CheckboxGroup from './checkbox/group'
import Drawer from './drawer/main'

const components = [
    Container,
    Footer,
    Header,
    MsPage,
    Link,
    Button,
    Input,
    Form,
    FormItem,
    Tabbar,
    TabbarItem,
    Popup,
    Icon,
    ButtonGroup,
    Img,
    Row,
    Col,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Drawer
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
    Vue.prototype.$MS_OPTION = {
        size: opts.size || 'medium',
        zIndex: opts.size || 2000
    }

    Vue.prototype.$loading = Loading
    Vue.prototype.$msgbox = MsgBox
    Vue.prototype.$alert = MsgBox.alert
    Vue.prototype.$confirm = MsgBox.confirm
    Vue.prototype.$prompt = MsgBox.prompt
    Vue.prototype.$toast = Toast.show
}

// 通过脚本引入安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Loading,
    MsgBox,
    Container,
    MsPage,
    Footer,
    Header,
    Button,
    Input,
    Form,
    FormItem,
    Tabbar,
    TabbarItem,
    Popup,
    Icon,
    ButtonGroup,
    Img,
    Row,
    Col,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Drawer
}
