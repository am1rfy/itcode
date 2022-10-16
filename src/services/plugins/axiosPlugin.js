import axios from 'axios'
import qs from 'qs'

import { baseURL } from '@/services/config'

export const customAxios = axios.create({
    baseURL: baseURL,
    paramsSerializer: function (params) {
        return qs.stringify(params, {
            arrayFormat: 'repeat'
        })
    }
})
