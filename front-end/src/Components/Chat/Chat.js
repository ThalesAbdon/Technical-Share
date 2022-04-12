import React, { useState, useEffect } from "react";
import Message from "../Message/Message";
import "./Chat.css";
import { Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Auth from "../../Auth/Auth"

export default function Chat({ socket }) {
	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	const room = localStorage.getItem("room");
	
	  function handleKeyDown(e){
		if(e.keyCode === 13) { 
			sendMessage()
	  }
	}
	
	useEffect(() => {
		socket.on("receiveMessage", (data) => {
			setMessageList((list) => [...list, data]);
		});
	}, [socket]);

	useEffect(() =>{
    Auth()
	},[])
	 
	const sendMessage = () => {
		if (message.trim() === "") return;
		socket.emit("message", { userId: socket.id, name: socket.name, message, room});
		setMessage("");
		clearInput();
	};

	const clearInput = () => {
		document.querySelector("#input").value = "";
	};

	return (
		<div className="chat-container">
			<div className="chat-body">
				<div className="messages">
					<div className="messages-list">
						{messageList.map((data) => (
							<Message text={data.message} author={data.name} bot={data.bot} socket={socket} authorId={data.userId} />
						))}
					</div>
				</div>
			</div>
			<div className="chat-footer">
				<Input className="message-input" placeholder="Write a message..." type="textarea" id="input" 
				onKeyDown={handleKeyDown}
				onChange={(e) => setMessage(e.target.value)} />
				<SendIcon className="btn-send" id="button" color="primary" onClick={() => sendMessage()} />
			</div>
		</div>
	);
}