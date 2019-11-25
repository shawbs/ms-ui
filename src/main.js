import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MSUi from '@/main/packages'
import '@/main/packages/theme/src/index.scss'
import en from '@/main/locale/lang/en'

Vue.use(MSUi,{size: 'large', locale: en})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
