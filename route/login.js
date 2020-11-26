const route = require('express').Router()

const db = require('../model/db')
const bcrypt = require('bcrypt')
const jwt = require('jws')


route.get('/login',(req,res)=>{

    res.send('ola')
})


route.post('/login',(req,res)=>{
    const {id,name,pass} = req.body
    const data = `SELECT * FROM Login_Users WHERE name = '${name}'`

    db.query(data,(err,results)=>{
        if(err)throw err

        if(results.length === 0 )return res.send({err:'user not found'})
        const {senha} = results[0]
        const compare = bcrypt.compareSync(pass,senha)

        if(!compare)return res.send({err:'user not found'})
        
        return res.json({sucess:'welcome'})
    })
})

module.exports = route