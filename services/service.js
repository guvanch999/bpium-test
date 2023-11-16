const AppError = require('../utils/appError')
const axios = require('axios')
const BP = require('bp-api').default
const bp = new BP("testa-procat.bpium.ru", "guvanch.d.1999@gmail.com", "fib11235813", "https", 30000)

module.exports = {
    async getCommentMessage() {
        const {data} = await axios.get('http://127.0.0.1:8475/api/webrequest/request')
        return data.value
    },
    async login() {
        const data = await axios.post('https://testa-procat.bpium.ru/auth/login', {
            email: "guvanch.d.1999@gmail.com",
            password: "fib11235813"
        })
        console.log(data)
    },
    async getRecords() {
        return await bp.getAllRecords(13)
    },
    async createRecord(values) {
        return await bp.postRecord(14, values)
    }
}