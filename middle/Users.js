const Obj = {}
const objs = {


    add:({name,token})=>{
        Obj[token]  = {token,name}
    },
    remove:(token)=>{
       delete Obj[token]
    }
}

module.exports = objs