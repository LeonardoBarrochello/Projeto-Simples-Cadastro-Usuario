const Database = require('../db/config')
const send = require('./SendMail')

module.exports = {

    async create(req,res){
        const db = await Database()
        let name = req.body.name
        let email = req.body.email
        let pass = req.body.pass;
        let verifyCreate = await db.all(`SELECT * FROM usuario WHERE email = '${email}' `)
        console.log(verifyCreate)
        if( !verifyCreate.length >0){
            const message = "Olá usuario!! bem vindo ao nosso site!!"
            await db.run(`INSERT INTO usuario(email,pass,name)  VALUES('${email}',${pass},'${name}')`)
            send.send(email,message)
            res.render('parts/confirmCreate')
        }else{
            res.render("parts/userAlready.ejs")
        }
       
        
       
    }
}