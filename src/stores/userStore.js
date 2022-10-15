import {defineStore} from 'pinia'
import {responseProcessing} from '@/stores/responseProcessing'

export const useUserStore = defineStore('user', {
    state() {
        return {
            _token: undefined,
        }
    },
    getters: {
        token(state) {
            if (!state._token) {
                state._token = localStorage.getItem('token')
            }
            return state._token
        }
    },
    actions: {
        async login(username, password) {
            let resp

            try {
                resp = await this.$axios.post(
                    '/user/login/',
                    {username, password}
                )
                this._token = resp.data.token
                localStorage.setItem('token', this._token)
            }
            catch (err) {
                resp = err.response
            }
            return responseProcessing(resp)
        },
        async register(username, password) {
            let resp

            try {
                resp = await this.$axios.post(
                    '/user/register/',
                    {username, password}
                )
                this._token = resp.data.token
                localStorage.setItem('token', this._token)
            }
            catch (err) {
                resp = err.response
            }
            return responseProcessing(resp)
        }
    }
})