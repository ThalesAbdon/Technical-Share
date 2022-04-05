const horarioModel = require("../models/Horarios");
const UserModel = require("../models/User");

class User {
  async create(req, res) {
    const { name, work, seniority, skills, bio } = req.body;
    await UserModel.create({ name, work, seniority, skills, bio });
    return res.status(201).json({ message: "Usuário criado!" });
  }

  async get(req, res) {
    const user = await UserModel.find();
    return res.status(200).json({ user });
  }

  async update(req, res) {
    if (req.file) {
      const avatar = `http://localhost:4000/files/images/${req.file.filename}`;
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
  
  async listarAgenda(req,res){
    const horarios = await horarioModel.find().populate('user')
    return res.status(200).json(horarios)
  }

}

module.exports = new User();
