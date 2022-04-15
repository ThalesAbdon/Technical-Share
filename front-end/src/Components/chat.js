
import io from "socket.io-client";
import {Container} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import Auth from "../Auth/Auth";
import Join from "./Join/Join";
import Chat from "./Chat/Chat";

const socket = io.connect("http://localhost:5000");

function Mensagem() {
	const [chatVisible, setChatVisible] = useState(false);
	useEffect(() =>{
		Auth()
		},[])
	return (
		<Container>
			{/* <div className="App"> */}
				{chatVisible ? <Chat socket={socket} /> : <Join socket={socket} setVisibility={setChatVisible} />}
			{/* </div> */}
		</Container>
	)
}

export default Mensagem;