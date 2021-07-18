const Obj = {}

const objs = {
    add:({name,token})=>{
        Obj[token]  = {token,name}
    },
    remove:(token)=>{
        Obj[token] = ""
    }
}


module.exports = objs