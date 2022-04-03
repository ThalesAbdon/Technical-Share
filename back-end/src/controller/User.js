const UserModel = require('../models/User')

class User{
    async get(req,res){
        const user = await UserModel.find()
        return res.status(200).json({user})
    }

    async create(req,res){
       const {name,work,seniority,skills,bio} = req.body 
       await UserModel.create({name,work,seniority,skills,bio})
       return res.status(201).json({message:"Usuário criado!"})
    }
}

module.exports = new User()