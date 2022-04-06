import React, { useEffect, useState } from "react";
import './Header.scss';
import {Container, InputGroup, FormControl, Row} from 'react-bootstrap';
import api from '../services/api';

export default function Header (){

    const [search,setSearch] = useState('')
   
   // useEffect(() => {
     async function buscar(){
     const data = await api.get(`/api/search/?skills=${search}`)
     console.log(data.data, true)
      
     //setSearch(data.data)
     }
    //})

    return(  
    <section className="header d-flex align-items-center px-3">
        <Container>
            <Row className="justify-content-center">
                <h1>Encontre seu mentor</h1>
                <InputGroup className="input py-3" size="lg">
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Nome, Skill, Assunto" value={search}onChange = {e=>setSearch(e.target.value)}/>
                </InputGroup>
            </Row>

             <button onClick={buscar}>
                 Pesquisar
             </button>
        </Container>
    </section>
    )  
}


