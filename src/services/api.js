import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use(config => {
    const access_token = localStorage.getItem('access-token')
    const uid = localStorage.getItem('uid')
    const client = localStorage.getItem('client')

    if(access_token != null) {
        config.headers = {
            'access-token': access_token,
            'uid': uid,
            'client': client
        }
        return config
    }

    return config
})

export default api