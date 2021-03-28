import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import GroupDetail from './pages/GroupDetail'
import Login from './pages/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/group/:id',
            name: 'groupDetail',
            component: GroupDetail
        },
        {
            path: '/login',
            component: Login,
        }
    ]
})