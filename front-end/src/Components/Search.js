import React from "react";
import './Search.scss';
import {Container, InputGroup, FormControl, Row, Button} from 'react-bootstrap';

document.body.style = "background: transparent";

const Search = () => (
    <section className="d-flex px-3">
        <Container>
            <Row className="justify-content-center">
                <h1>Encontre um <b>mentor</b></h1>
                <InputGroup className="input py-3" size="sm">
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-md" placeholder="Digite aqui uma skill que você quer aprender"/>                    
                </InputGroup>
                 <div>
                <Button>
                    Pesquisar
                </Button>
                </div>
                <h2>Estes são os mentores com a <b>skill escolhida</b></h2>
            </Row>
        </Container>
    </section>
)

export default Search;
