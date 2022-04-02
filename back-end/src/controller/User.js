const UserModel = require('../models/User')

class User{
    async get(req,res){
        const user = await UserModel.find()
        return res.status(200).json(user)
    }
}

module.exports = new User()