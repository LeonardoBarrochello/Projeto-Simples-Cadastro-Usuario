const express = require('express')
const { resolveInclude } = require('ejs')
const route = express.Router()  //gerenciador de rotas do express
const CadastroController = require('./controllers/CadastroController')
const LoginController = require('./controllers/LoginController')

route.get("/", (req,res) => res.render("home"))
route.get("/home/?", (req,res) => res.render("home"))
route.get("/cadastro" , (req,res) => res.render("cadastro"))
route.get("/login" , (req,res) => res.render("login"))

route.post("/cadastro-conta",CadastroController.create)
route.post("/login-conta",LoginController.open)

module.exports = route

