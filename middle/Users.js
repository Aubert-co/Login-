const Obj = {}


/*const objs = {


    add:({name,token})=>{
        Obj[token]  = {token,name}
    },
    remove:(token)=>{
       delete Obj[token]
    }
}*/

class UsersTokens{
   
    addUsers({name,token}){
        Obj[token]  = {token,name}
    }
    removeUsers(token){
        delete Obj[token]
    }
    
}
const users = new UsersTokens

module.exports = users