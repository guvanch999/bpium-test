const statusCodes = require('../utils/statusCodes')
const service = require('../services/service')
module.exports = {
    async preHook(request, response) {
        const data = request.body

        // data.payload.values["3"] = "this will changed"
        let comment = await service.getCommentMessage()
        let res = {
            "message": { // опционально, string или object{title, text}
                "title": "Информация",
                "text": "Заказ соответствует"
            },
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
    async createRecord(request, response) {
        const created_record = request.body

        const comment = created_record.payload.values["3"]
        const recordId = created_record.payload.recordId
        let values = {
            "2": new Date().toISOString(),
            "3": [
                {

                    "catalogId": 13,
                    recordId,
                }],
            "4": comment
        }

        let data = values; //await service.createRecord(values)
        console.log(data)
        return response.status(200).json(data)
    }
}