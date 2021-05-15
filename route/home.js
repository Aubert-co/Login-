const router = require('express').Router()



router.get('/auth/home',(req,res)=>{


  res.send({msg:'Welcome',status:200})
})
module.exports = router