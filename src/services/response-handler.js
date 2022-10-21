// TODO: Обработку ошибок внедрить в http-client

export default (response) => {
    let [isSuccess, msg] = [false, '']

    if (response.status === 200)
        isSuccess = true
    else if (response.status === 400)
        msg = response.data.non_field_errors.join('. ')
    else
        msg = 'server error'

    return [isSuccess, msg]
}