import jwt from 'jsonwebtoken'



const verify = (token)=>jwt.verify(token,'segredo')


export default verify