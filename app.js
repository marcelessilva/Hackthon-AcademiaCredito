import express from "express"
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const Port = 3000;

app.listen(Port, () => {
    console.log("Servidor Rodando na porta " + Port)
})

/*app.get("/requerente", (request, response) => {
    response.send(pessoa);
})*/

app.post("/requerente", (request, response) => {
    /*{
    "nome": "Sophia",
    "cpf": "000.000.000-00",
    "rg":"00.000.000-9",
    "datanascimento":"14/06/1987",
    "celular":"(00)98888-5555",
    "email":"fulano@gmail.com",
    "endereco":"Rua Josefina Costa, 123",
    "bairro":"Maria das Dores",
    "cidade": "São Paulo",
    "estado": "SP",
    "cep":"11660-220"
}*/
    console.log(request.body);
    response.send("Sucesso")
})