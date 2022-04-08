import React, { useState } from 'react';
import {Container,Form, Button, Row, Col} from 'react-bootstrap';
import './Login.scss';
import api from '../services/api'
import { useNavigate } from 'react-router-dom';


document.body.style = "background: transparent";

function Login() {  
   
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const history = useNavigate('');

   
       
        
        async function login(e){
            e.preventDefault(); 
            try{
                const data = await api.post("/api/login/", {email,senha})
                console.log(data.status)
                localStorage.setItem("token",data.data.token);
                return history("/buscar")    
            }catch(error){
                alert("Email ou Senha incorretos!")
            }
        
        }
    

   
    return(
    <section className="d-flex">
        <Container>

     <Row className="justify-content-center center mt-5 pt-5">
                <h1>Olá, <span>#sanguelaranja</span></h1>
                <h5 className="mt-4">Cadastre-se para entrar nessa vitamina de conhecimento e ajuda mútua</h5>
                <center className="box mt-5">
                    <Form onSubmit= {login} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail corporativo</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange = {e => setEmail(e.target.value)}/>
                    </Form.Group>
                         
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={senha} onChange = {e => setSenha(e.target.value)}/>
                    </Form.Group>
                    <br/>
                    <Button variant="" className="color-primary" type="submit">
                        Entrar
                    </Button>                             
                    </Form>
                </center>
            </Row>
        </Container>
    </section>
    );

}

export default Login;