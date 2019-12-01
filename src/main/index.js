
import Lacale from './locale'
import Loading from './packages/loading/index.js'
import MsgBox from './packages/message-box/index.js'
import Toast from './packages/toast/index.js'

import Layout from './packages/layout/index.js'
import Link from './packages/link/index.js'
import Button from './packages/button/index.js'
import ButtonGroup from './packages/button-group/index.js'
import Input from './packages/input/index.js'
import Form from './packages/form/index.js'
import FormItem from './packages/form-item/index.js'
import Tabbar from './packages/tabbar/index.js'
import TabbarItem from './packages/tabbar-item/index.js'
import Popup from './packages/popup/index.js'
import Icon from './packages/icon/index.js'
import Img from './packages/img/index.js'
import Row from './packages/row/index.js'
import Col from './packages/col/index.js'
import Radio from './packages/radio/index.js'
import RadioGroup from './packages/radio-group/index.js'
import Checkbox from './packages/checkbox/index.js'
import CheckboxGroup from './packages/checkbox-group/index.js'
import Drawer from './packages/drawer/index.js'
import SideMenu from './packages/side-menu/index.js'
import Grid from './packages/grid/index.js'
import GridItem from './packages/grid-item/index.js'
import Cell from './packages/cell/index.js'
import CellGroup from './packages/cell-group/index.js'

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
    SideMenu,
    Grid,
    GridItem,
    Cell,
    CellGroup
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
    SideMenu,
    Grid,
    GridItem,
    Cell,
    CellGroup
}
