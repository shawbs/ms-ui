
import Lacale from '../locale'
import Loading from './loading/index.js'
import MsgBox from './message-box/index.js'
import Layout from './layout/container/index.js'
import Link from './link/index.js'
import Button from './button/index.js'
import ButtonGroup from './button-group/index.js'
import Input from './input/index.js'
import Form from './form/index.js'
import FormItem from './form-item/index.js'
import Tabbar from './tabbar/index.js'
import TabbarItem from './tabbar-item/index.js'
import Popup from './popup/index.js'
import Toast from './toast/index.js'
import Icon from './icon/index.js'
import Img from './img/index.js'
import Row from './row/index.js'
import Col from './col/index.js'
import Radio from './radio/index.js'
import RadioGroup from './radio-group/index.js'
import Checkbox from './checkbox/index.js'
import CheckboxGroup from './checkbox-group/index.js'
import Drawer from './drawer/index.js'
import SideMenu from './side-menu/index.js'

const components = [
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
    Drawer,
    SideMenu
]

const install = function (Vue, opts = {}) {
    Lacale.use(opts.locale)
    Vue.use(Layout)

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
    Toast,
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
    Drawer,
    SideMenu
}
