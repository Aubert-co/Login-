const users = require('../middle/users')
const jwt  = require('jsonwebtoken')

module.exports = (req,res,next)=>{
  const token = req.headers['x-api-token']
  
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    

    jwt.verify(token,'segredo',function(err, decoded) {
      if (err) return res.status(401).send({msg:'no authorized'})
      const {jwt} = decoded
      console.log(jwt,'here')
      // se tudo estiver ok, salva no request para uso posterior
      req.userID =decoded;
 
    });
      next();
}