const express = require('express');
const routeApi = express.Router();

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // Extração da extensão do arquivo original:
        const extensaoArquivo = file.originalname.split('.')[1];

        // Cria um código randômico que será o nome do arquivo
        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');

        // Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});
const upload = multer({ storage });


routeApi.use(express.urlencoded({extended:true}))
routeApi.get('/formtest',(req,res) => res.render('formTest'))
routeApi.post('/cadastro' ,upload.single('foto'), (req,res) =>{
    const { nome, site } = req.body;
    res.json({nome,site})
})

module.exports = routeApi