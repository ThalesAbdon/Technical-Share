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

    async update(req,res){
        if(req.file){
            
        } else{
            await UserModel.findByIdAndUpdate({_id:req.params.id},{
                $set: req.body
            })
            return res.status(200).json({message:"Usuário atualizado!"})
        }
    }

    async delete(req,res){
            await UserModel.findByIdAndDelete({_id:req.params.id})
            return res.status(200).json({message:"Usuário Deletado!"})
    }
}

module.exports = new User()