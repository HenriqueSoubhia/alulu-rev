// configurações do servidor
// carregar o modulo express

const express = require("express");

//excutar o módulo express
const app = express();

//definir a pasta dos arquivos ejs
app.set("views", "./");

//criar uma instancia local
app.listen(8, () => {
  console.log("http://localhost:8/");
});

//fim da config do server

//config banco de dados inicio

const mongoose = require("mongoose")

const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:123user@fiap-tecnico.dsp0j.mongodb.net/?retryWrites=true&w=majority')
}


//config banco de dados fim


//rota para requisição /

app.get("/", (req, res) => {
    conexao()
  res.render("index.ejs", {
    nome: "Alunos Feiosos",
    turma: "2EMIA",
    disciplina: "LP2",
  });
});
