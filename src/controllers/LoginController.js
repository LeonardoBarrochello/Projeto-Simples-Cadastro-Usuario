const Database =  require('../db/config')
const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({secret:'wswswswdfweweeewewe'}))

module.exports = {
        async open(req,res){
        
           const db = await Database()
           const email = req.body.email;
           const pass = req.body.pass;
           const verifyUser =  await db.all(`SELECT * FROM usuario WHERE email = '${email}' `)
           var i = 0 ;
           var aux = 0 ;
           while(i<verifyUser.length){
                if(verifyUser[i].pass === pass){
                    
                    res.render("logado",{logado:verifyUser[i].email}) //ver pq o session n funciona
                    aux = 1;
                    console.log(verifyUser[i])
                    break
                }
                i++
           }
           if(aux == 0){
               res.render("parts/passincorrect")
           }
        }
}