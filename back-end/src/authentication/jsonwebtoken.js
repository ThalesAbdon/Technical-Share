const jwt = require("jsonwebtoken") 

class GenerateToken{ 
generate(id){
    return jwt.sign({id},process.env.HASH,{
        expiresIn:12000000000000000000000000000000000000 // voltar para 1200s
    })
}

}
module.exports = new GenerateToken()