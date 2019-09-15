const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    createClient: {
        body: {
            name: Joi.string().required(),
            email: Joi.string().email().required()
        }
    },
    findOneClient: {
        params: {
            _id: Joi.objectId().required()
        }
    },
    updateClient: {
        params: {
            _id: Joi.objectId().required()
        },
        body: {
            name: Joi.string().optional(),
            email: Joi.string().email().optional()
        }
    },
    addProductsFavorites: {
        params: {
            _id: Joi.objectId().required()
        },
        body: {
            id: Joi.string().required()
        }
    }
}