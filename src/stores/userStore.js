import {defineStore} from 'pinia'


export const useUserStore = defineStore('user', {
    state() {
        return {
            token: undefined,
        }
    },
    actions: {
        login() {
            throw Error('Not implemented')
        },
        register() {
            throw Error('Not implemented')
        }
    }
})