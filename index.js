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
    console.log(request.body);
    response.send("Sucesso")
})