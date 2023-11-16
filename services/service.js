const AppError = require('../utils/appError')
const axios = require('axios')
module.exports = {
    async getCommentMessage() {
        const {data} = await axios.get('http://127.0.0.1:8475/api/webrequest/request')
        return data.value
    }
}