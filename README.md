# ms-ui

### 参照element-ui实现的一个Vue 移动端组件库


### [文档](https://shawbs.github.io/ms-ui.example.io/#/)

## 安装

```
npm install @shawbs/ms-ui -S
```

### 全部引入

```
import MsUi from "@shawbs/ms-ui";
import "@shawbs/ms-ui/lib/theme/index.css";
Vue.use(MsUi, { size: "small" });
```

### 按需引入
```
//.babelrc 
{
    "plugins": [
        [
        "component",
        {
            libraryName: "@shawbs/ms-ui",
            styleLibraryName: "theme",
        }
        ]
    ]
}
```
```
import {
  Tabbar,
  TabbarItem,
  Layout,
  Button,
  ButtonGroup,
  Row,
  Col,
  Icon,
  Popup,
  MessageBox,
  Toast,
  Loading,
  Form,
  FormItem,
  Input,
  Img,
  Link,
  Radio,
  RadioGroup,
  SideMenu
} from "@shawbs/ms-ui";

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabbarItem.name, TabbarItem);
Vue.use(Layout);
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(Icon.name, Icon);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Popup.name, Popup);
Vue.use(MessageBox);
Vue.use(Toast);
Vue.use(Loading);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Img.name, Img);
Vue.component(Link.name, Link);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(SideMenu.name, SideMenu);
```

### 国际化

```
import MsUi from "@shawbs/ms-ui";
import "@shawbs/ms-ui/lib/theme/index.css";
import en from "@shawbs/ms-ui/lib/locale/lang/en";

Vue.use(MsUi, { locale: en });
```

### 主题化

```
import MsUi from "@shawbs/ms-ui";
import "./ms-ui.scss";
Vue.use(MsUi);
```
ms-ui.scss
```
/* 改变主题色变量 */
$--color-primary: teal;

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~@shawbs/ms-ui/lib/theme/font';

@import "~@shawbs/ms-ui/main/packages/theme/src/index";
```

