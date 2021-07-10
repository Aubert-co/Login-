const route = require('express').Router()

const db = require('../model/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//const users = require('../middle/users')
//const {addUsers,removeUsers,findUsers} = users




route.post('/login',(req,res)=>{
    const {name,password} = req.body
    

    if(!name || !password || password === '' || name === '')return res.send({status:500,msg:'...'})

    if(typeof password !== "string" || typeof name !=="string")return res.send({status:100,msg:"precisa ser string"})

    

    const data = `SELECT * FROM Login_Users WHERE name = '${name}'`

    db.query(data,(err,results)=>{
        if(err)throw err

        if(results.length === 0 )return res.send({status:401,msg:'user not found'})
        const {senha,id} = results[0]
  
        const compare = bcrypt.compareSync(password,senha)

        
        if(!compare)return res.send({status:401,msg:'user not found'})
        
        const tokens = {name,id}
    
        const token = jwt.sign({jwt:tokens},'segredo',{expiresIn:24*60*60})
       
        //addUsers({name,token})
     

        return res.send({msg:'sucessful login',status:200,token,name})
        
    })


})

route.get('/logout',(req,res)=>{
    const token = req.headers['x-api-token']
    
    delete token
//    removeUsers(token)

    res.send({msg:'sucess',status:401})
})
module.exports = route