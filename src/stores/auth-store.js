import { defineStore } from 'pinia'
import { auth, setToken, responseHandler} from '../services/index.js'

export const useAuthStore = defineStore('auth', {
    actions: {
        async handleLogin(username, password) {
            try {
                const resp = await auth.login({username, password})
                return saveToken(resp)
            }
            catch (err) {
                return {isSuccess: false, msg: err.message}
            }
        },
        async handleRegister(username, password) {
            try {
                const resp = await auth.register({username, password})
                return saveToken(resp)
            }
            catch (err) {
                return {isSuccess: false, msg: err.message}
            }
        },
        handleLogout() {
            setToken(undefined)
        }
    }
})

function saveToken(resp) {
    let [isSuccess, msg] = responseHandler(resp)

    if (isSuccess)
        setToken(resp.data.token)

    return {isSuccess, msg}
}