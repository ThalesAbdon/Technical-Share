const app = require('./app/app')
const server = require("http").createServer((app));
const io = require('socket.io')(server, {cors: {origin:'http://localhost:3000'}});
const cors = require('cors')
app.use
io.on("connect", (socket) => {
	//console.log("New user connected!");
	let nameSocket;

	socket.on("userConnected", (name) => {
		nameSocket = name;
		io.emit("receiveMessage", { bot: true, message: `${name} connected!` });
	});

	socket.on("message", (data) => {
		//console.log(data);
		io.emit("receiveMessage", data);
	});

	socket.on("disconnect", () => {
		if (!nameSocket) return;
		io.emit("receiveMessage", { bot: true, message: `${nameSocket} left!` });
	});
});

//module.exports = io

//const server = require('./app/app')
server.listen(process.env.PORT,()=>{
    console.log(`rodando na porta ${process.env.PORT}`);
})