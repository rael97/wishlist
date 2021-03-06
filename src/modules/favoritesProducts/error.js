
const HttpStatus = require('http-status-codes')

const { mapperError } = require('../../mappers/error')
const moduleError = {
    E11000: {
        status: HttpStatus.CONFLICT,
        message: 'user with this key already exists        '
    },
    productNotFound: {
        status: HttpStatus.NOT_FOUND,
        message: 'Product not found in base magalu'
    },
    customerNotFound: {
        status: HttpStatus.NOT_FOUND,
        message: 'Customer not found in base'
    }
}
module.exports = (error) => {
    return mapperError(moduleError[error])
}
