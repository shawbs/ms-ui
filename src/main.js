import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MSUi from 'ms-ui/index'
import 'ms-ui/packages/theme/src/index.scss'
import en from 'ms-ui/locale/lang/en'

Vue.use(MSUi,{size: 'large', locale: en})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
