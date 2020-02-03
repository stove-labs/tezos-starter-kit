/**
 * If the requested big_map key is not found, the response will be a 404 HttpResponseError
 */
module.exports = error => {
    return error.status === 404;
}