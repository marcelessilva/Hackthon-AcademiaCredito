import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//configuracao do banco de dados
import pkg from 'pg';
const { Client } = pkg;

const url = process.env.DATABASE_URL;
const client = new Client({
    connectionString: url,
    ssl: {
        rejectUnauthorized: false
    }
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
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
    console.log("Servidor Rodando na porta " + Port);
});

//api
app.post("/requerente", (request, response) => {
    salvarRequerente(request.body, response);
});

function salvarRequerente(body, response) {
    const requerenteInsertQuery = `INSERT INTO public.requerente(
        nome, cpf, rg, celular, datanascimento, email, endereco, bairro, cidade, estado, cep)
        VALUES ('${body.nome}', 
            '${Number(body.cpf)}', 
            '${body.rg}', 
            '${body.celular}', 
            '${body.dataNascimento}', 
            '${body.email}',
            '${body.endereco}', 
            '${body.bairro}',
            '${body.cidade}', 
            '${body.estado}', 
            '${body.cep}'
        );`

    client.query(requerenteInsertQuery, (err, result) => {
        if (!err) {
            salvarProjeto(body, response);
        } else {
            responderErroQuery("Erro ao inserir requerente", err, response);
        }
    });
}

function salvarProjeto(body, response) {
    const projetoInsertQuery = `INSERT INTO public.projeto(
        valor, resumoideia, dificuldadesideia, requerente_id)
        VALUES (
            '${body.valorFinanciamento}', 
            '${body.projeto}', 
            '${body.dificuldades}', 
            ${Number(body.cpf)}
        );`

    client.query(projetoInsertQuery, (err, result) => {
        if (!err) {
            response.status(201).send("inserido com sucesso");

        } else {
            responderErroQuery("Erro ao inserir projeto", err, response);
        }
    })
}

function responderErroQuery(msg, erro, response) {
    console.log(msg, erro);
    if (response) {
        response.status(500).send(msg+" "+erro.detail);
    }
}
