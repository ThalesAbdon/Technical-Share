const horarioModel = require("../models/Horarios");
const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const { where } = require("../models/Horarios");
const generateToken = require("../authentication/jsonwebtoken");
class User {
  
  async create(req, res) {
    const { name, work, seniority, skills, bio,horariosDisponiveis,email,senha,softSkills} = req.body;
    const hash = bcrypt.hashSync(senha,10)
    if(horariosDisponiveis){
      await UserModel.create({ name, work, seniority, skills, bio,horariosDisponiveis,email,senha:hash,softSkills});
    return res.status(201).json({ message: "Usuário criado!" });
    }
    return res.status(400).json({message: "Você precisa definir horários disponivéis!"})
  }
  

  async login(req,res){
    const {email,senha} = req.body;
    const data = await UserModel.findOne({email})
    if(!data){
      return res.status(400).json({message: "Email Incorreto!!"})
    }
    const verify = await bcrypt.compare(senha,data.senha) 
    if(verify){
      const token = generateToken.generate({id:data._id}) 
      return res.status(200).json({token})
    }else{
      return res.status(400).json("message: Wrong Password!")
    }
  }

  async get(req, res) {
    const user = await UserModel.find().select("-senha");
    return res.status(200).json({ user });
  }

  async update(req, res) {
    if (req.file) {
      const avatar = `http://localhost:${process.env.Port}/files/images/${req.file.filename}`;
      console.log(avatar);
      await UserModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: { avatar },
        }
      );
      return res.status(200).json({ message: "Usuário atualizado!" });
    } else {
      await UserModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: req.body,
        }
      );
      return res.status(200).json({ message: "Usuário atualizado!" });
    }
  }

  async delete(req, res) {
     await horarioModel.findOneAndDelete({user:{_id: req.params.id}});
     await UserModel.findByIdAndDelete({ _id: req.params.id });
    
    return res.status(200).json({ message: "Usuário Deletado!" });
  }

  async searchName(req,res){
    const user = await UserModel.findOne({_id: req.user.id})
    console.log(user)
    return res.status(200).json(user.name)
  }

  async search(req,res){
    const user = await UserModel.find(req.query)
    console.log(req.query)
    return res.status(200).json(user)
  }
   
  async agendar(req,res){
    try{
      if(req.params.id === req.user.id){
        return res.json({message: "Você não pode dar mentoria para si mesmo!"})
      }
      const horariomarcado = await horarioModel.create({
      horario: req.body.horario, 
      idAluno: req.user.id,
      user: req.params.id
    })
    return res.status(200).json({message: "Horário marcado!"})
    }catch(error){
      console.log(error)
      return res.json({message: "Horário já Agendado!"})
    }
  }
  

  async listarAgendaUser(req,res){
    try{
    const horarios = await horarioModel.find({idAluno: req.user.id}).populate({path: 'user', select: '-senha'});
    return res.status(200).json(horarios)
    } catch(error){
      return res.status(200).json([])
    }
  }


  //ajeitar para listar apenas um user
  async listarTodosOsHorarios(req,res){
    const horarios = await horarioModel.find().populate({path: 'user', select: '-senha'})
    return res.status(200).json(horarios)
  }


  async cancelarHorario(req,res){
    await horarioModel.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({ message: "Horário Cancelado!" });
  }

}

module.exports = new User();
