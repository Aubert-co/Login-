const router = require('express').Router()



router.get('/home',(req,res)=>{


  res.status(200).send({msg:'Welcome'})
})
module.exports = router