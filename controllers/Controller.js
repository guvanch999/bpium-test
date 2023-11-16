const statusCodes = require('../utils/statusCodes')
const service = require('../services/service')
module.exports = {
    async preHook(request, response) {
        const data = request.body

        console.log(data.payload)

        return response.status(200).json(request.body)
    }
}