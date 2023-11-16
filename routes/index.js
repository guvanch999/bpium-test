const router = require("express").Router();

const Controller = require('../controllers/Controller')
router.post('/pre-hook', Controller.preHook)

module.exports = router


