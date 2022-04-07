const mongoose = require('../database/database')
const UserSchema = new mongoose.Schema({
avatar:{
    type: String,
    default: 'https://www.letheshouse.pt/wp-content/uploads/2018/07/user-icon.jpg'
},
name:{
    type: String,
    allowNull: false,
    required: true
},
work:{
    type: String,
    allowNull: false,
    required: true
},
seniority:{
    type: String,
    allowNull: false,
    required: true
},
avaliation:{
    type: Number,
    allowNull: false,
    default: 0,

},
skills:{
    type: String,
    required: true,
},
bio:{
    type: String,
    allowNull: false,
    required: true
}, 
horariosDisponiveis:{
    type: [String],
    required: true,
    allowNull: false,
},

},{timestamps:true}
)
const UserModel = mongoose.model('User',UserSchema)

module.exports = UserModel