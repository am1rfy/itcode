import makeRequest from '@/services/makeRequest'

const login = ({username, password}) => {
    return makeRequest({
        url: '/user/login/',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

const register = ({username, password}) => {
    return makeRequest({
        url: '/user/register/',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

export {
    login,
    register
}
