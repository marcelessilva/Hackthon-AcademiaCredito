//const { url } = require("inspector")

function post(url, body){
    console.log("Body", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText

}

function cadastrarRequerente(event){
    event.preventDefault()
    let url = "http://localhost:3000/requerente"
    let nome = document.getElementById("nome").value
    console.log(nome)
    let cpf = document.getElementById("cpf").value
    let rg = document.getElementById("rg").value
    let dataNascimento = document.getElementById("dataNascimento").value
    let celular = document.getElementById("celular").value
    let email = document.getElementById("email").value
    let endereco = document.getElementById("endereco").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let cep = document.getElementById("cep").value
    let valorFinanciamento = document.getElementById("valorFinanciamento").value
    let projeto = document.getElementById("projeto").value
    let dificuldades = document.getElementById("dificuldades").value
    console.log(nome)
    console.log(cpf)
    console.log(rg)
    console.log(dataNascimento)
    console.log(celular)
    console.log(email)
    console.log(endereco)
    console.log(bairro)
    console.log(cidade)
    console.log(estado)
    console.log(cep)
    console.log(valorFinanciamento)
    console.log(projeto)
    console.log(dificuldades)

    body = {
        "nome":nome,
        "cpf":cpf,
        "rg":rg,
        "dataNascimento":dataNascimento,
        "celular": celular,
        "email":email,
        "endereco":endereco,
        "bairro":bairro,
        "cidade":cidade,
        "estado":estado,
        "cep":cep,
        "valorFinanciamento":valorFinanciamento,
        "projeto":projeto,
        "dificuldades":dificuldades

    }


    post(url, body)


}