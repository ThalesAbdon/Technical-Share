class User{
    async get(req,res){
    return res.status(200).json("Hello Dev")
    }
}

module.exports = new User()