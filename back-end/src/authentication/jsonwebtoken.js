const jwt = require("jsonwebtoken") 

class GenerateToken{ 
generate(id){
    return jwt.sign({id},process.env.HASH,{
        expiresIn:1600

    })
}

}
module.exports = new GenerateToken()