import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//configuracao do banco de dados
import pkg from 'pg';
const {Client} = pkg;

const url = "database url aqui";
const client = new Client({
    connectionString: url
})
client.connect();

//configuracao do express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//subindo servidor
const Port = 3000;
app.listen(Port, () => {
    console.log("Servidor Rodando na porta " + Port)
});

//api
app.post("/requerente", (request, response) => {
    const requerente = request.body;
    const insertQuery= `INSERT INTO public.requerente(
        nome, cpf, rg, celular, datanascimento, email, endereco, bairro, cidade, estado, cep)
        VALUES ('${requerente.nome}', 
            '${requerente.cpf}', 
            '${requerente.rg}', 
            '${requerente.celular}', 
            '${requerente.dataNascimento}', 
            '${requerente.email}',
            '${requerente.endereco}', 
            '${requerente.bairro}',
            '${requerente.cidade}', 
            '${requerente.estado}', 
            '${requerente.cep}'
        );` 
    
    client.query(insertQuery, (err,result) => {
        if (!err) {
            console.log(result)
            response.status(201).send("Requerente foi inserido com sucesso")
            client.end();
        } else {
            response.status(500).send("Erro ao inserir requerente")
            client.end();
        }
    });
});