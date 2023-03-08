
import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyA83bgIiNnirVAb6hkxNwSfK0VnvCZUtTM'
    }
})

export default authApi