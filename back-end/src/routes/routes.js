const {Router} = require('express')
const router = Router()
const User = require('../controller/User')
router.get('/api/get',User.get)

module.exports = router

