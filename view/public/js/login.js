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

    if(pass === '' || name === ''){
        errs.innerHTML = 'digite algo valido'

        ClearErrMsg(errs)
        return e.preventDefault()
    }

   const response = await fetch('http://192.168.100.54:8080/login',{
        method:'POST',
        headers:  { 'Content-Type': 'application/json'},
        body:JSON.stringify({name:name,password:pass})
    
    })/*.then(response=>response.json())
       .then((res)=>{
           console.log(res)
           const {token} = res
            localStorage.setItem('token',token)
        
         //  window.location.href = 'http://127.0.0.1:5500/view/home.html'
           
       })*/
        const {msg,status,token} =await response.json()
        if(status ===401 || token === undefined)return errs.innerHTML = msg
           
        localStorage.setItem('token',token)
        window.location.href = 'home.html'

        
        
    }catch(err){
        if(err)throw err
    }
    }
