const {Router} = require('express')
const multer = require('../multer/multer')
const router = Router()
const User = require('../controller/User')

//POST
//post para criar um user
router.post('/api/create',User.create)
// post que adiciona um horário na agenda
router.post('/api/agendar/:id',User.agendar)

// GET
// get que lista os dados de um user já cadastrado no sistema
router.get('/api/get',User.get)
//get que busca um User por algum parametro definido na busca
router.get('/api/search',User.search)
//get que lista os horários agendados
router.get('/api/listarAgenda/:id',User.listarAgenda)

//PUT
// put que atualiza a foto do avatar e do dados do usuário
router.put('/api/update/:id',multer.single('avatar'),User.update)

//DELETE
router.delete('/api/delete/:id',User.delete)


module.exports = router

