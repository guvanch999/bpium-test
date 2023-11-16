const statusCodes = require('../utils/statusCodes')
const service = require('../services/service')
module.exports = {
    async preHook(request, response) {
        console.log(request.body)

        return response.status(200).json(request.body)
    }
}