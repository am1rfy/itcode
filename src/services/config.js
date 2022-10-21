const baseURL = import.meta.env.VITE_API_URL

let token = undefined

const setToken = _token => {
    if (_token) {
        token = _token
        localStorage.setItem('token', token)
    }
    else {
        localStorage.removeItem('token')
    }
}

export {
    baseURL,
    token,
    setToken
}