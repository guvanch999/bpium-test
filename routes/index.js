const router = require("express").Router();

const Controller = require('../controllers/Controller')
router.post('/pre-hook', Controller.preHook)
router.post('/login', Controller.login)
router.get('/records', Controller.getRecords)
router.post('/create-record', Controller.createStore)
router.post('/make-order', Controller.createOrder)
module.exports = router


