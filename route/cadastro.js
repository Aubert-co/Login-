const route = require('express').Router()

const bcrypt = require('bcrypt')
const db = require('../model/db')



route
.post('/cadastro', (req,res)=>{
    const {name,password} = req.body
    
    
    if(password === '' || name === '' || typeof name !== 'string' ){

     res.status(404).send({msg:"wrong datas"})
     
     return
    }

    const sql = `SELECT * FROM Login_Users WHERE name='${name}'`

    db.query(sql,(err,results)=>{
        if(err)throw err

     
        if(results.length >0)return  res.status(404).send({msg:'user already exist'})
        
            const senha = bcrypt.hashSync(password,5)
            const save = `INSERT INTO Login_Users(name,senha) VALUES('${name}','${senha}')`

            db.query(save,(err)=>{
                if(err)throw err
                
               return res.status(200).send({msg:'registered successfully'})
            })
    })
})

module.exports = route