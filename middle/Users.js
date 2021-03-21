const objs = {
    Obj:{},

    add:({name,token})=>{
        objs.Obj[token]  = {token,name}
    },
    remove:(token)=>{
       delete objs.Obj[token]
    }
}

module.exports = objs