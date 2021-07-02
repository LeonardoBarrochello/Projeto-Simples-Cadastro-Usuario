const Database =  require('../db/config')


module.exports = {

        async open(req,res){
            const db = await Database()
            const email = req.body.email;
            const pass = req.body.pass;
            console.log(pass)
           const verifyUser =  await db.get(`SELECT * FROM usuario WHERE email = '${email}' `)
           console.log(verifyUser.pass)
           if(verifyUser.pass === pass){
               res.redirect(`/home/user=${verifyUser.id}`)
           }else{
               res.render("parts/passincorrect")
           }
            

            


        }



}