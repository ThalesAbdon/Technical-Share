import React, { useState, useEffect } from "react";
import "./Join.scss";
import {Button, Input } from "@material-ui/core";
import {Container, Row} from 'react-bootstrap';
import Auth from "../../Auth/Auth";
import api from "../../services/api";
import '../Buttons.scss';

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
  const roomId = localStorage.getItem("room");


  const handleSubmit = () => {
    
    if (name.trim() === "") return;
    socket.emit("join_room",roomId);
    socket.name = name;
    setVisibility(true);
  };

  return (
    <section className="d-flex my-4 py-4">

      <Container>
        <Row className="my-5 py-5 align-items-center justify-content-center"> 

          <div className="join-container">
            <div className="join-header">
              <h1>Join</h1>
            </div>
            <div className="join-body mt-3">
              {Auth()}
              Olá! <br/>
              Combine aqui com seu mentor qual será a plataforma de encontro de vocês. <br/>
              Desejamos sucesso nessa sua nova jornada!
            
            
              <button
                className="time-card mt-4"
                variant="contained"
                color="primary"
                onClick={() => handleSubmit()}
              >
                Iniciar conversa
              </button>
                    
              


            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
