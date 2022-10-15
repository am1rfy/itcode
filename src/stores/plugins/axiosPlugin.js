import axios from 'axios'
import qs from 'qs'

export function axiosPiniaPlugin(context) {
    context.store.$axios = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        paramsSerializer: function (params) {
            return qs.stringify(params, {
                arrayFormat: 'repeat'
            })
        }
    })
}