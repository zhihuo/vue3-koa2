import Vue from 'vue'
import Router from 'vue-router'
import Indexpage from '@/pages/index'
import Infolist from '@/pages/infolist'
import Users from '@/pages/users'
import Product from '@/pages/product'
import Login from '@/pages/login'
import Register from '@/pages/register'

Vue.use(Router)

const router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/index'
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { enShowLayout: true } // 不显示layout
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { enShowLayout: true } // 不显示layout
        },
        {
            path: '/index',
            name: 'index',
            component: Indexpage
        },
        {
            path: '/infolist',
            name: 'infolist',
            component: Infolist
        },
        {
            path: '/product',
            name: 'product',
            component: Product
        }
    ]
})

export default router;