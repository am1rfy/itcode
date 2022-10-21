import { customAxios } from '@/services/plugins/axiosPlugin'
import { token } from '@/services/config'

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

    return customAxios({
        url,
        method,
        params,
        data,
        headers
    })
}
