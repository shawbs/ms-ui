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
                component: () => import('@/views/tab/home')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('@/views/tab/about')
            }
        ]
    },
    {
        path: '/other',
        name: 'other',
        meta: {title: 'other'},
        component: () => import('@/views/other')
    },
    {
        path: '/button',
        name: 'button',
        meta: {title: 'button'},
        component: () => import('@/views/com/button')
    },
    {
        path: '/form',
        name: 'form',
        meta: {title: 'form'},
        component: () => import('@/views/com/form')
    },
    {
        path: '/img',
        name: 'img',
        meta: {title: 'img'},
        component: () => import('@/views/com/img')
    },
    {
        path: '/input',
        name: 'input',
        meta: {title: 'input'},
        component: () => import('@/views/com/input')
    },
    {
        path: '/layout',
        name: 'layout',
        meta: {title: 'layout'},
        component: () => import('@/views/com/layout')
    },
    {
        path: '/link',
        name: 'link',
        meta: {title: 'link'},
        component: () => import('@/views/com/link')
    },
    {
        path: '/loading',
        name: 'loading',
        meta: {title: 'loading'},
        component: () => import('@/views/com/loading')
    },
    {
        path: '/message-box',
        name: 'message-box',
        meta: {title: 'message-box'},
        component: () => import('@/views/com/message-box')
    },
    {
        path: '/row',
        name: 'row',
        meta: {title: 'row'},
        component: () => import('@/views/com/row')
    },
    {
        path: '/toast',
        name: 'toast',
        meta: {title: 'toast'},
        component: () => import('@/views/com/toast')
    },
    {
        path: '/radio',
        name: 'radio',
        meta: {title: 'radio'},
        component: () => import('@/views/com/radio')
    },
    {
        path: '/checkbox',
        name: 'checkbox',
        meta: {title: 'checkbox'},
        component: () => import('@/views/com/checkbox')
    },
    {
        path: '/tabbar',
        name: 'tabbar',
        meta: {title: 'tabbar'},
        component: () => import('@/views/com/tabbar')
    },
    {
        path: '/drawer',
        name: 'drawer',
        meta: {title: 'drawer'},
        component: () => import('@/views/com/drawer')
    },
    {
        path: '/icon',
        name: 'icon',
        meta: {title: 'icon'},
        component: () => import('@/views/com/icon')
    },
    {
        path: '/side-menu',
        name: 'side-menu',
        meta: {title: 'side-menu'},
        component: () => import('@/views/com/side-menu')
    },
    {
        path: '/cell',
        name: 'cell',
        meta: {title: 'cell'},
        component: () => import('@/views/com/cell')
    },
    {
        path: '/switch',
        name: 'switch',
        meta: {title: 'switch'},
        component: () => import('@/views/com/switch')
    },
    {
        path: '/pull-refresh',
        name: 'pull-refresh',
        meta: {title: 'pull-refresh'},
        component: () => import('@/views/com/pull-refresh')
    },
    {
        path: '/nav',
        name: 'nav',
        meta: {title: 'nav'},
        component: () => import('@/views/com/nav')
    }

]

const router = new VueRouter({
    routes
})

export default router
