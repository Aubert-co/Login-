const route = require('express').Router()

const bcrypt = require('bcrypt')
const db = require('../model/db')
route

.post('/cadastro',(req,res)=>{
    const {name,pass} = req.body
  
    const sql = `SELECT * FROM Login_Users WHERE name='${name}'`

    db.query(sql,(err,results)=>{
        if(err)throw err


        if(results.length ===0){
            console.log('aw')
            const senha = bcrypt.hashSync(pass,5)
            const save = `INSERT INTO Login_Users(name,senha) VALUES('${name}','${senha}')`

            db.query(save,(err,results)=>{
                if(err)throw err
                
               return res.status(200).send('cadastrado com sucesso')
            })

        }else{
            res.status(200).send('user ja cadastrado')
        }
    })
})

module.exports = route