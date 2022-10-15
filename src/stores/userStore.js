import {defineStore} from 'pinia'
import {responseProcessing} from '@/stores/responseProcessing'

export const useUserStore = defineStore('user', {
    state() {
        return {
            token: undefined,
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
                this.token = resp.data.token
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
                this.token = resp.data.token
            }
            catch (err) {
                resp = err.response
            }
            return responseProcessing(resp)
        }
    }
})