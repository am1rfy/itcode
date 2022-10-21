import makeRequest from '../http-client.js'

const login = ({username, password}) =>
    makeRequest({
        url: '/user/login/',
        method: 'post',
        data: {
            username,
            password
        }
    })


const register = ({username, password}) =>
    makeRequest({
        url: '/user/register/',
        method: 'post',
        data: {
            username,
            password
        }
    })


export {
    login,
    register
}