import { defineStore } from 'pinia'
import { user, setToken } from '@/services/index'
import { responseHandler } from '@/services/responseHandler'

export const useUserStore = defineStore('user', {
    actions: {
        async handleLogin(username, password) {
            try {
                const resp = await user.login({username, password})
                return saveToken(resp)
            }
            catch (err) {
                return {isSuccess: false, msg: err.message}
            }
        },
        async handleRegister(username, password) {
            try {
                const resp = await user.register({username, password})
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

    if (isSuccess) {
        localStorage.setItem('token', resp.data.token)
        setToken(localStorage.getItem('token'))
    }
    return {isSuccess, msg}
}