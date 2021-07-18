import {CadastroPost} from './services/request'

const namee = document.querySelector('.name')
const pass1 = document.querySelector('.pass1')
const pass2 = document.querySelector('.pass2')
const errs = document.querySelector('.MsgErrs')
const Inputs = document.querySelector('.Inputs')

const btn = document.querySelector('.btn')
.addEventListener('click',FormEvent)



async function FormEvent(e){
    const pass = pass1.value
    const name = namee.value
    
    if(pass==='' || name === ''){
        errs.innerHTML = 'Digite algo valido'

        return e.preventDefault()
    }
    if(pass2.value !== pass1.value){
        errs.innerHTML = 'Senhas não batem'
        return e .preventDefault()
    }
    SendDatas(name,pass)
}

async function SendDatas(name,password){
    const response = await CadastroPost(name,password)
    const {msg,status} = await response.json()
    
    if(msg === 'registered successfully' && status === 2)return window.location.href='login.html'


}
