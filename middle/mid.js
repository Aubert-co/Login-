const jwt  = require('jsonwebtoken')

module.exports = (req,res,next)=>{
  const token = req.headers['x-api-token']

    if (!token) return res.status(401).json({status:401,msg: 'No token provided.' });
        

    jwt.verify(token,'segredo',function(err, decoded) {
      if (err) return res.status(401).send({status:401,msg:'Not authorized'})
      const {jwt} = decoded
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userID =token;
      next();
    });
      
}