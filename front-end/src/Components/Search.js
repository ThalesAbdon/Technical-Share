import React, { useEffect, useState } from "react";
import './Search.scss';
import {Container, InputGroup, FormControl, Row} from 'react-bootstrap';
import api from '../services/api';


export default function Search () {
    
    document.body.style = "background: transparent";

    const [search,setSearch] = useState('')

   // useEffect(() => {
     async function buscar(){
     const data = await api.get(`/api/search/?skills=${search}`)
     console.log(data.data, true)

     //setSearch(data.data)
     }
    //})

     return(

    <section className="d-flex px-3">
        <Container>
            <Row className="justify-content-center">
                <h1>Encontre um <b>mentor</b></h1>
                <InputGroup className="input py-3" size="sm">
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-md" placeholder="Digite aqui uma skill que você quer aprender" value={search}onChange = {e=>setSearch(e.target.value)}/><button onClick={buscar}>search</button>                
                </InputGroup>
                <h2>Estes são os mentores com a <b>skill escolhida</b></h2>
            </Row>
        </Container>
    </section>
     )
}