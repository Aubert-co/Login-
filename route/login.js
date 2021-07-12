const route = require('express').Router()

const db = require('../model/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')





route.post('/login',(req,res)=>{
    const {name,password} = req.body
    

    if( password === '' || name === '' || typeof password !== "string" || typeof name !=="string"){
        return res.status(405).send({msg:'wrong datas'})
    }

    

    const data = `SELECT * FROM Login_Users WHERE name = '${name}'`

    db.query(data,(err,results)=>{
        if(err)throw err

        if(results.length === 0 )return res.status(405).send({msg:'user not found'})
        const {senha,id} = results[0]
  
        const compare = bcrypt.compareSync(password,senha)

        
        if(!compare)return res.status(405).send({msg:'user not found'})
        
        const tokens = {name,id}
    
        const token = jwt.sign({jwt:tokens},'segredo',{expiresIn:24*60*60})
       
        //addUsers({name,token})
        
        res.set('x-api-token',token)
        return res.status(200).send({msg:'sucessful login',token})
        
    })


})

route.get('/logout',(req,res)=>{
    var token = req.headers['x-api-token']
    
     token = ''
//    removeUsers(token)

    res.send({msg:'sucess',status:200})
})
module.exports = route