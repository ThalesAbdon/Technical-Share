const {Router} = require('express')
const multer = require('../multer/multer')
const router = Router()
const User = require('../controller/User')
router.post('/api/create',User.create)
router.get('/api/get',User.get)
router.get('/api/search',User.search)
router.put('/api/update/:id',multer.single('avatar'),User.update)
router.delete('/api/delete/:id',User.delete)
module.exports = router

