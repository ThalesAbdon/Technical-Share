import React, { useState, useEffect } from "react";
import "./Join.css";
import {Button, Input } from "@material-ui/core";
import Auth from "../../Auth/Auth";
import api from "../../services/api";

export default function Join({ socket, setVisibility }) {
	
	//const para buscar o nome e usar como nickname!
	const [name, setName] = useState("teste");
  const [room, setRoom] = useState("");
	useEffect(() => {
    async function buscarNome() {
      const data = await api.get("/api/searchName/", {
        headers: { "x-access-token": token },
      });
      setName(data.data);
    }
	  buscarNome();
  }, []);

  const token = localStorage.getItem("token");
  
  const joinRoom = () => {
    if(room !== ""){
      socket.emit("join_room",room);
      //console.log(room);
      localStorage.setItem("room", room)
    }
  }

  const handleSubmit = () => {
    if (name.trim() === "") return;
    socket.emit("join_room",room);
    socket.name = name;
    setVisibility(true);
    socket.emit("userConnected", name);

  };

  return (
    <div className="join-container">
      <div className="join-header">
        <h1>Join</h1>
      </div>
      <div className="join-body">
        {Auth()}
        <text type="text">
          {" "}
          Todas as mensagens serão gravadas e ao clicar em entrar você concorda
          com isso!{" "}
        </text>
        
        <Input placeholder = "Room..."
           value = {room}
           onChange = {(event) =>{
           setRoom(event.target.value)}}>
          </Input>

        

         <Button onClick={joinRoom}>Join Room</Button>
        <Button
          className="btn-join"
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
        >
          Enter
        </Button>
              
         


      </div>
    </div>
  );
}
