const {Router} = require('express')
const multer = require('../multer/multer')
const router = Router()
const User = require('../controller/User')
router.get('/api/get',User.get)
router.post('/api/create',User.create)
router.put('/api/update/:id',multer.single('avatar'),User.update)
router.delete('/api/delete/:id',User.delete)
module.exports = router

