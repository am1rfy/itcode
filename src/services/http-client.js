import axios from 'axios'

// import qs from 'qs'

import { token } from './config.js'
import { baseURL } from './config.js'

const instance = axios.create({
    baseURL: baseURL
})

export default ({
    url = '/',
    method = 'get',
    params = {},
    data = {},
    headers = {}
}) => {
    if (headers && headers.authorization) {
        headers.authorization = token
    }

    return instance({
        url,
        method,
        params,
        data,
        headers
    })
}