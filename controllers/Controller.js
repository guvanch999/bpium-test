const statusCodes = require('../utils/statusCodes')
const service = require('../services/service')
module.exports = {
    async preHook(request, response) {
        const data = request.body

        // data.payload.values["3"] = "this will changed"
        let comment = await service.getCommentMessage()
        let res = {

            "values": {...data.payload.values, "3": comment}
        }

        return response.status(200).json(res)
    },
    async login(request, response) {
        try {
            await service.login()
        } catch (err) {
            console.log(err)
        }
        return response.status(200).json({message: ""})
    },
    async getRecords(request, response) {
        let res = []
        try {
            res = await service.getRecords()
        } catch (err) {
            console.log(err)
        }
        return response.status(200).json(res)
    },
    async createStore(request, response) {
        const created_record = request.body

        const comment = created_record.payload.values["3"]
        const recordId = parseInt(created_record.payload.recordId)
        let values = {
            "2": new Date().toISOString(),
            "3": [
                {

                    "catalogId": 13,
                    recordId,
                }],
            "4": comment
        }

        let data = await service.createRecord(values)

        return response.status(200).json(data)
    },
    async createOrder(request, response) {
        const {comment, status} = request.body
        let values = {
            "2": [
                status
            ],
            "3": comment
        }
        let data = await service.createOrder(values)
        return response.status(201).json(data)
    }
}