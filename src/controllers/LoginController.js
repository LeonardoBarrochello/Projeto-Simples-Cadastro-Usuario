const Database =  require('../db/config')
const express = require('express')
const session = require('express-session')
const { OPEN_READWRITE } = require('sqlite3')
const app = express()

app.use(session({secret:'wswswswdfweweeewewe'}))

module.exports = {
        async open(req,res){
           
           const db = await Database()
           const email = req.body.email;
           const pass = req.body.pass;
           const verifyUser =  await db.get(`SELECT * FROM usuario WHERE email = '${email}' and pass = ${pass} `)
           if(!verifyUser == ''){
                    req.session.login = verifyUser.email
                    res.redirect("/painel/") //ver pq o session n funciona
           }else{
                res.render("parts/passincorrect")
           }
        
        }
}