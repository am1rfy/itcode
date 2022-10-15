
export function responseProcessing(response) {
    let [isSuccess, result] = [false, '']

    if (response.statusCode === 200)
        isSuccess = true
    else if (response.statusCode === 400)
        result = response.data.non_field_errors.join('. ')
    else
        result = 'server error'

    return {isSuccess, result}
}