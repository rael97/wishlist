const { createUserService, signInService, listUserService } = require('./service')
const HttpStatus = require('http-status-codes')

module.exports.list = async (req, res, next) => {
    try {
        res.json(await listUserService(req.query))
    } catch (error) {
        next(error)
    }
}
module.exports.create = async (req, res, next) => {
    try {
        res.status(HttpStatus.CREATED)
        res.json(await createUserService(req.body))
    } catch (error) {
        next(error)
    }
}

module.exports.signIn = async (req, res, next) => {
    try {
        res.json(await signInService(req.body))
    } catch (error) {
        next(error)
    }
}
