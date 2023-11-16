const AppError = require('../utils/appError')
const axios = require('axios')
module.exports = {
    async getCommentMessage() {
        const {data} = await axios.get('https://test.bpium.ru/api/webrequest/request')
        console.log(data)
    }
}