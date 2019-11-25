# ms-ui

### Vue 移动端组件库

## 使用

```
npm install @shawbs/ms-ui
```

### 全部引入
```
//src/main.js
import MsUi from "@shawbs/ms-ui";
import "@shawbs/ms-ui/lib/theme/theme.css";
```

### 按需引入
```
//.babelrc 
{
    "plugins": [
        [
        "component",
        {
            "libraryName": "ms-ui",
            "styleLibraryName": "theme"
        }
        ]
    ]
}
```
```
import Vue from 'vue'
import {Button} from '@shawbs/ms-ui'

Vue.component(Button.name, Button)
```