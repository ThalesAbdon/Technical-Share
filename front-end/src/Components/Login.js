import React, { useState } from 'react';
import {Container,Form, Button, Row, Col} from 'react-bootstrap';
import './Login.scss';
import api from '../services/api'
import { useNavigate } from 'react-router-dom';


function Login(){
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
        /*
        if(data.status === 400){
            alert(data.data.response)
        }else{
           
        }*/
    }




document.body.style = "background: transparent";

const Login = () => (
    <section className="d-flex mb-5 pb-5">


    return(
    <section className="d-flex">
        <Container>

            <Row className="justify-content-center center mt-4 pt-4">
                <h1>Faça login</h1>
                <div className="box mt-4">
                    <Form onSubmit= {login} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail corporativo</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange = {e => setEmail(e.target.value)}/>
                    </Form.Group>
                         
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={senha} onChange = {e => setSenha(e.target.value)}/>
                    </Form.Group>
                    <Button variant="" className="color-primary" type="submit">
                        Entrar
                    </Button>

            <Row className="justify-content-center center mt-5 pt-5">
                <h1>Olá, <span>#sanguelaranja</span></h1>
                <h5 className="mt-4">Cadastre-se para entrar nessa vitamina de conhecimento e ajuda mútua</h5>
                <center className="box mt-5">
                    <Form>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                            <Form.Label>E-mail corporativo</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="" className="btn-login mt-2" type="submit">
                            Entrar
                        </Button>

                    </Form>
                </center>
            </Row>
        </Container>
    </section>
    )
}

export default Login;
