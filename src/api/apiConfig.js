const express = require('express');
const routeApi = express.Router();
const multer = require('multer')

routeApi.use(express.urlencoded({extended:true}))
routeApi.get('/formtest',(req,res) => res.render('formTest'))
routeApi.post('/cadastro' , (req,res) =>{
    const { nome, site } = req.body;
    res.json({nome,site})
})


module.exports = routeApi