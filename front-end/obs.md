Folder views:
1. Navbar
    - Burger
    - RightNav
    As barras Navigation foram excluídas pois não serão mais utilizadas.

Folder components:
1. Burger.js
2. RightNav.js
3. Search.js
4. Search.scss





















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
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-md" placeholder="Digite aqui uma skill que você quer aprender" value={search}onChange = {e=>setSearch(e.target.value)}/>
                    </InputGroup>
                    <h2>Estes são os mentores com a <b>skill escolhida</b></h2>
                </Row>

                <button onClick={buscar}>
                    Pesquisar
                </button>
            </Container>
        </section>
    )  