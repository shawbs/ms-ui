import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/tab/home'
    },
    {
        path: '/tab',
        name: 'home',
        component: () => import('@/views/tab'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/home')
            },
            {
                path: 'mine',
                name: 'mine',
                component: () => import('@/views/mine')
            }
        ]
    },
    {
        path: '/other',
        name: 'other',
        meta: {title: 'other'},
        component: () => import('@/views/other')
    }
]

const router = new VueRouter({
    routes
})

export default router
