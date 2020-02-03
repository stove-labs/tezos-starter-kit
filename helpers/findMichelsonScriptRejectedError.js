const { rpcErrors } = require('./constants');
/**
 * Find the error message thrown by the michelson script
 */
module.exports = rpcError =>
    JSON.parse(rpcError.message).errors
        .filter(error => error.id === rpcErrors.michelson.scriptRejected)
        /**
         * If your LIGO contract does `failwith("1")` then `with` will be:
         * "with": {
         *   "string": "1"
         * }
         */
        .map(error => error.with)[0]