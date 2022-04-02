const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:root123@cluster0.dgju2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(console.log('conectado'))
module.exports = mongoose