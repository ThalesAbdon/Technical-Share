const horarioModel = require("../models/Horarios");
const UserModel = require("../models/User");
const bcrypt = require("bcrypt")
class User {
  
  async create(req, res) {
    const { name, work, seniority, skills, bio,horariosDisponiveis,email,senha} = req.body;
    const hash = bcrypt.hashSync(senha,10)
    if(horariosDisponiveis){
      await UserModel.create({ name, work, seniority, skills, bio,horariosDisponiveis,email,senha:hash});
    return res.status(201).json({ message: "Usuário criado!" });
    }
    return res.status(400).json({message: "Você precisa definir horários disponivéis!"})
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

  async search(req,res){
    const user = await UserModel.find(req.query)
    console.log(req.query)
    return res.status(200).json(user)
  }
   
  async agendar(req,res){
    try{
    const horariomarcado = await horarioModel.create({
      horario: req.body.horario, 
      user: req.params.id
    })
    return res.status(200).json({message: "Horário marcado!"})
    }catch(error){
      return res.json({message: "Horário já Agendado!"})
    }
  }
  

  async listarAgendaUser(req,res){
    try{
    const horarios = await horarioModel.find({user: req.params.id}).populate('user')
    return res.status(200).json(horarios)
    } catch(error){
      return res.status(200).json([])
    }
  }


  //ajeitar para listar apenas um user
  async listarTodosOsHorarios(req,res){
    const horarios = await horarioModel.find().populate('user')
    return res.status(200).json(horarios)
  }


  async cancelarHorario(req,res){
    await horarioModel.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({ message: "Horário Cancelado!" });
  }

}

module.exports = new User();
