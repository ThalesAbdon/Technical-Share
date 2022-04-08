
import io from "socket.io-client";

import { useState, useEffect } from "react";
import Auth from "../Auth/Auth";
import Join from "./Join/Join";
import Chat from "./Chat/Chat";

const socket = io.connect("http://localhost:5000");

function Mensagem() {
	const [chatVisible, setChatVisible] = useState(false);
	useEffect(() =>{
		Auth()
		},[])
	return <div className="App">{chatVisible ? <Chat socket={socket} /> : <Join socket={socket} setVisibility={setChatVisible} />}</div>;
}

export default Mensagem;