const statusCodes = require('../utils/statusCodes')
const service = require('../services/service')
module.exports = {
    async preHook(request, response) {
        const data = request.body

        data.payload.values["3"] = "this will changed"

        console.log(data.payload)

        let res = {
            "message": { // опционально, string или object{title, text}
                "title": "Информация",
                "text": "Заказ соответствует"
            },
            "values": {...data.payload.values, "3": "this will changed"}
        }

        return response.status(200).json(res)
    }
}