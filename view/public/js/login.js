import {LoginPost} from './services/request'

const form = document.querySelector('form')

const InputName = document.querySelector('.name')
const InputPassword = document.querySelector('.pass1')

const errs = document.querySelector('.MsgErrs')
const Inputs = document.querySelector('.Inputs')

const btn = document.querySelector('.btn')
.addEventListener('click',FormEvent)


const ClearErrMsg = (err)=>{
     setInterval(()=>{
        err.innerHTML = ''
     },3000)
 }
 

 function FormEvent(e){

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
    SendDatas(name,pass)
}


async function SendDatas(name,password){
    try{
        const response = await LoginPost(name,password)
        const {msg,status,token} =await response.json()
        LoginAndToken(msg,status,token)
    }catch(err){
        if(err)throw err
    }
} 

function LoginAndToken(msg,status,token){
    if(status ===401 || token === undefined)return errs.innerHTML = msg
           
    localStorage.setItem('token',token)
    window.location.href = 'home.html'
}