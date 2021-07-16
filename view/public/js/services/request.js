export default  {
    LoginPost:async function (name,password){
        try{
        const URL = 'http://192.168.100.54:8080/login'
        const method = "POST"
        const headers = {'Content-Type':'application/json'}
        const body = JSON.stringify({name,password})
         
        return fetch(URL,{method,headers,body})
        
        }catch(err){
            if(err)throw err
        }
    },

    CadastroPost:async function(name,password){
        const Url = 'http://192.168.100.54:8080/cadastro'
        const method = "POST"
        const headers ={'Content-Type':'application/json'}
        const body = JSON.stringify({name,password})
    
        return  await fetch(Url,{method,headers,body})
    }
}