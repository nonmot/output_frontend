import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Home from './pages/Home'
import GroupDetail from './pages/GroupDetail'
import GroupCreate from './pages/GroupCreate'
import Login from './pages/Login'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            meta: {requireAuth: true}
        },
        {
            path: '/group/create',
            component: GroupCreate,
            meta: {requireAuth: true}
        },
        {
            path: '/group/:id',
            name: 'groupDetail',
            component: GroupDetail,
            meta: {requireAuth: true}
        },
        {
            path: '/login',
            component: Login,
        },
    ]
})

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters['isLoggedIn']
    const token = localStorage.getItem('access-token')
    const expiresIn = localStorage.getItem('expiry')

    if(to.matched.some(record => record.meta.requireAuth)) {
        // ログインが必要な画面へ遷移しようとした場合
        if(isLoggedIn) {
            // ログインしている状態の場合
            next()
        } else {
            // ログインしていない場合
            if(token !== null) {
                // トークンが期限切れでない場合
                const now = new Date()
                if(now.getTime() < expiresIn * 1000) {
                    store.dispatch('auth/reload')
                    next()
                } else {
                    next('/login')
                }
            } else {
                forceToLoginPage(to, from, next)
            }
        }
    } else {
        next()
    }
})

function forceToLoginPage(to, from, next) {
    next({
        path: '/login',
        query: {next: to.fullPath}
    })
}

export default router
