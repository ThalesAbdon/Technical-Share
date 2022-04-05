

const server = require('./app/app')
server.listen(process.env.PORT,()=>{
    console.log(`rodando na porta ${process.env.PORT}`);
})