const route = require('express').Router()

const bcrypt = require('bcrypt')
const db = require('../model/db')
route
.get('./cadastro',(req,res)=>{

})
.post('./cadastro',(req,res)=>{
    const {name,senha} = req.body
   
    const sql = `SELECT * FROM Login_Users WHERE name=${name}`

    db.query(sql,(err,results)=>{
        if(err)throw err


        if(results.length <=0){
            const pass = bcrypt.hashSync(senha,5)
            const save = `INSERT INTO Login_Users(?,?) VALUES('${name}','${pass}')`

            db.query(save,(err,results)=>{
                if(err)throw err
                
                res.send({sucess:'cadastrado com sucesso'})
            })

        }
        return res.send({err:'usuario já existe'})
    })
})

module.exports = route