const {Router} = require('express')
const router = Router()
const User = require('../controller/User')
router.get('/api/get',User.get)
router.post('/api/create',User.create)
router.put('/api/update/:id', User.update)
module.exports = router

