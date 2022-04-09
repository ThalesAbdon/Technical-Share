const jwt = require("jsonwebtoken") 

class GenerateToken{ 
generate(id){
    return jwt.sign({id},process.env.HASH,{
        expiresIn:12000000000
    })
}

}
module.exports = new GenerateToken()