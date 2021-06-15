const form = document.querySelector('form')

const InputName = document.querySelector('.name')
const InputPassword = document.querySelector('.pass1')

const errs = document.querySelector('.MsgErrs')
const Inputs = document.querySelector('.Inputs')

const btn = document.querySelector('.btn')
.addEventListener('click',send)


 const ClearErrMsg = (err)=>{
     setInterval(()=>{
        err.innerHTML = ''
     },3000)
 }
 

async function send(e){
    try{
    const name = InputName.value
    const pass = InputPassword.value

    if(pass === '' || name === '' || typeof name !== 'string'){
        errs.innerHTML = 'digite algo valido'
        ClearErrMsg(errs)
        return e.preventDefault()
    }
    if(typeof pass !== 'string'){
        errs.innerHTML = "Digite uma senha com numeros e letras"

        return e.preventDefault()
    }
    
    const URL = 'http://192.168.100.54:8080/login'
    const method = "POST"
    const headers = {'Content-Type':'application/json'}
    const body = JSON.stringify({name:name,password:pass})
   
    const response = await fetch(URL,{method,headers,body})

        const {msg,status,token} =await response.json()
        if(status ===401 || token === undefined)return errs.innerHTML = msg
           
        localStorage.setItem('token',token)
        window.location.href = 'home.html'

    }catch(err){
        if(err)throw err
    }
    }


 
function alo(){
    alert('ola')
}
