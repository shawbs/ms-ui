import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MsComponents from '@/lib/packages'
import '@/lib/packages/theme/src/index.scss'

Vue.use(MsComponents)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
