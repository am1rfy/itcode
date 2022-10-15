const baseURL = process.env.VUE_APP_API_URL

let token = ''

const setToken = _token => {
    this.token = _token
}

export {
    baseURL,
    token,
    setToken
}

