const route = require('express').Router()
const user = require('../middle/Users')

route.get('/test',(req,res)=>{


    console.log(res.locals.name)
    res.send("session")
})



module.exports = route