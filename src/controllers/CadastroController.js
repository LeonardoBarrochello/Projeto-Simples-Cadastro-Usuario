const Database = require('../db/config')
module.exports = {

    async create(req,res){
        const db = await Database()
        let email = req.body.email
        let pass = req.body.senha;
        await db.run(`INSERT INTO usuario(email,pass)  VALUES('${email}',${pass})`)
        res.render('parts/confirmCreate')
    }
}