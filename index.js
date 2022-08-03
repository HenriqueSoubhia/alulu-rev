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

const conexao = () => {
  mongoose.connect('mongodb+srv://userRevisao:123user@fiap-tecnico.dsp0j.mongodb.net/revisao?retryWrites=true&w=majority')
}

//config o modelo alunos

const modelo = new mongoose.Schema({
  nome: String,
  turma: String,
  disciplina: String
})

//definir o modelo alunos

const alunos = mongoose.model('alunos', modelo)

//config banco de dados fim


//rota para requisição /

app.get("/", async(req, res) => {
  conexao()
  //presquisar documentos na collection alunos
  const resultado = await alunos.find()
  
  res.render("index.ejs", {
    resultado
  });
});
