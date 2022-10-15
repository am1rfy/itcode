
export function responseHandler(response) {
    let [isSuccess, msg] = [false, '']

    if (response.statusCode === 200)
        isSuccess = true
    else if (response.statusCode === 400)
        msg = response.data.non_field_errors.join('. ')
    else
        msg = 'server error'

    return {isSuccess, msg}
}