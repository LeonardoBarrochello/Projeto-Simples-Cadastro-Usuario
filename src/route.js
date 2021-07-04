const express = require('express')
const { resolveInclude } = require('ejs')
const route = express.Router()  //gerenciador de rotas do express
const session = require('express-session')
const CadastroController = require('./controllers/CadastroController')
const LoginController = require('./controllers/LoginController')

route.use(session({
    secret:'key'
}))

route.get("/", (req,res) => {res.render("login")})
route.get("/home", (req,res) => res.render("index"))
route.get("/cadastro" , (req,res) => res.render("cadastro"))
route.get("/login" , (req,res) => res.render("login"))

route.post("/cadastro-conta",CadastroController.create)
route.post("/login-conta",(req,res)=> {
    LoginController.open(req,res)

})


module.exports = route

