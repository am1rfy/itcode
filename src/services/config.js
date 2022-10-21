const baseURL = import.meta.env.VITE_API_URL

let token = undefined

const setToken = _token => {
    token = _token
}

export {
    baseURL,
    token,
    setToken
}