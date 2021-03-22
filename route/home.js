const router = require('express').Router()
const user = require('../middle/Users')

const jwt  = require('jws')


router.get('/auth/home',(req,res)=>{


  res.send({msg:'home welcome'})
})
module.exports = router