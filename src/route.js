const express = require('express')
const { resolveInclude } = require('ejs')
const route = express.Router()  //gerenciador de rotas do express
const session = require('express-session')
const CadastroController = require('./controllers/CadastroController')
const LoginController = require('./controllers/LoginController')

route.use(session({secret:'key',saveUninitialized: false,resave: false}))

route.get('/logout' , (req,res)=>{req.session.destroy() ; res.redirect('/')})
route.get("/", (req,res) =>{if(req.session.login){res.redirect('/admin')}else{res.render('login')}})
route.get("/admin", (req,res) => {
    if(req.session.login){
        res.render("admin/admin",{sessao:req.session.login})
    }else{
        res.redirect('login')
    }
})
route.get("/cadastro" , (req,res) => res.render("cadastro"))
route.get("/login" , (req,res) => res.render("login"))

route.post("/cadastro-conta",CadastroController.create)
route.post("/login-conta",(req,res)=> {
    LoginController.open(req,res)
})


module.exports = route

