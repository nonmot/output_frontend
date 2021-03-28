import Vue from 'vue'
import Vuex from 'vuex'
import api from './services/api'

Vue.use(Vuex)

const authModule = {
    namespaced: true,
    state: {
        name: '',
        email: '',
        isLoggedIn: false,
    },
    getters: {
        name: state => state.name,
        email: state => state.email,
        isLoggedIn: state => state.isLoggedIn,
    },
    mutations: {
        set(state, payload) {
            state.name = payload.user.name
            state.email = payload.user.email
            state.isLoggedIn = true
        },
        clear(state) {
            state.name = ''
            state.email = ''
            state.isLoggedIn = false
        }
    },
    actions: {
        login(context, payload) {
            return api.post('/sign_in', {
                'email': payload.email,
                'password': payload.password
            })
            .then(response => {
                console.log(response)
                localStorage.setItem('access-token', response.headers['access-token'])
                localStorage.setItem('token-type', response.headers['token-type'])
                localStorage.setItem('client', response.headers['client'])
                localStorage.setItem('expiry', response.headers['expiry'])
                localStorage.setItem('uid', response.headers['uid'])
                context.commit('set', {user: response.data.data})
                return response.data
            })
        },
        logout(context) {
            localStorage.removeItem('access-token')
            localStorage.removeItem('token-type')
            localStorage.removeItem('client')
            localStorage.removeItem('expiry')
            localStorage.removeItem('uid')
            context.commit('clear')
        }
    }
}

const store = new Vuex.Store({
    modules: {
        auth: authModule
    }
})

export default store