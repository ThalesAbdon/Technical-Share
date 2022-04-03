# Descrição da API

## Ferramentas
* Nodemon 
* Express
* Insomnia
* Mongoose
* Multer
* Mongo Atlas

### Nodemon
<p> Nodemon serve para fazer a atualização em tempo de execução</p>

### Express
<p> Uma ferramenta para criação de servidor da API </p>

### Insomnia
<p> Uma ferramenta para fazer teste de APIs</p>

### Mongoose
<p> Uma ORM(Object Relational Mapping) para fazer modelagem de dados</p>

### Multer
<p> Uma lib para fazer upload de arquivos ( no nosso caso, imagens do avatar) </p>

### Mongo Atlas
<p> Mongo Atlas é um cluster(em nuvem) que oferece armazenamento para dados utilizando MongoDB como Banco de Dados</p>


## Como testar a API?

<p>Para fazer testes utilize o seguinte url:</p>

* Rota de cadastro http://localhost:4000/api/create
```
{
"name": "Maria",
"work": "Ux",
"seniority": "Senior",
"skills": "MVP",
"bio": "Testando segundo usuário"
}
```

* Rota de listar http://localhost:4000/api/get
```
#No body
```
* Rota de atualizar http://localhost:4000/api/update/:id
```
{
#No lugar de :id na url, colocar o id do usuário( que está sendo gerado pelo mongo)   
"name": "Maria Lurdes",
}
```
* Rota de atualizar images http://localhost:4000/api/update/:id
```   
#Utilize o multform do insomnia com 2 campos: 
#1° campo de nome: avatar   2° campo com o arquivo que deseja upar: exemplo.png
```
* Rota de deletar http://localhost:4000/api/update/:id
```
#No lugar de :id na url, colocar o id do usuário( que está sendo gerado pelo mongo)   
```