const route = require('express').Router()

const bcrypt = require('bcrypt')
const db = require('../model/db')



route
.post('/cadastro',(req,res)=>{
    const {name,password} = req.body
    
    
    if(password === '' || name === '' || typeof name !=='string')return res.send({status:404,msg:"wrong datas"})


    const sql = `SELECT * FROM Login_Users WHERE name='${name}'`

    db.query(sql,(err,results)=>{
        if(err)throw err

     
        if(results.length >0)return  res.send({msg:'user already exist',status:404})
        
            const senha = bcrypt.hashSync(pass,5)
            const save = `INSERT INTO Login_Users(name,senha) VALUES('${name}','${senha}')`

            db.query(save,(err)=>{
                if(err)throw err
                
               return res.send({status:200,msg:'registered successfully'})
            })
    })
})

module.exports = route