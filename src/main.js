import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MsComponents from '@/components'
import '@/style/app.scss'

Vue.use(MsComponents)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
