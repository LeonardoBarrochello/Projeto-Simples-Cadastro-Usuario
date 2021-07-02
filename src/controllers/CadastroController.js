const Database = require('../db/config')
const send = require('./SendMail')

module.exports = {

    async create(req,res){
        const db = await Database()
        let email = req.body.email
        let pass = req.body.senha;
        const message = "Olá usuario!! bem vindo ao nosso site!!"
        send.send(email,message)
        await db.run(`INSERT INTO usuario(email,pass)  VALUES('${email}',${pass})`)
        res.render('parts/confirmCreate')
    }
}