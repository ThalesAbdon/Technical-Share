const mongoose = require ("../database/database");



const horarioSchema = new mongoose.Schema({
    horario:{
        type: [String],
    },
    //Fazendo relacionamento com model User 
    user:{
       type: mongoose.Schema.Types.ObjectId,
       ref:'User'
    }

},{
    timestamps:true
})

const horarioModel = mongoose.model('Horario',horarioSchema)
module.exports = horarioModel