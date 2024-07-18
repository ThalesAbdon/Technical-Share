const {Router} = require('express')
const multer = require('../multer/multer')
const router = Router()
const User = require('../controller/User')
const auth = require('../authentication/auth')

//POST
//post para criar um user
router.post('/api/create',User.create)
// post para login
router.post('/api/login',User.login)

// GET
// get que lista os dados de um user já cadastrado no sistema
router.get('/api/get',User.get)
//get que busca um User por algum parametro definido na busca
router.get('/api/search',User.search)
//get que lista os horários agendados
router.get('/api/listarAgendaUser/',auth.authenticate,User.listarAgendaUser)
//get que lista todos os horários
router.get('/api/listarTodosOsHorarios/:id',User.listarTodosOsHorarios)
// get que busca usuário por name
router.get('/api/searchName/',auth.authenticate,User.searchName)
// get por id
router.get('/api/getId/',auth.authenticate,User.getId)


//PUT
// put que atualiza a foto do avatar e do dados do usuário
router.put('/api/update/:id',auth.authenticate,multer.single('avatar'),User.update)
// put para agendar nova mentoria
router.put('/api/agendar/:id',auth.authenticate,User.agendar)

//DELETE
//delete para deletar um usuário
router.delete('/api/delete/:id',auth.authenticate,User.delete)
//delete para deletar um horário marcado na agenda(cancelar)
router.delete('/api/cancelarHorario/:id',auth.authenticate,User.cancelarHorario)


module.exports = router

