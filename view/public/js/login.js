
const form = document.querySelector('form')

const namee = document.querySelector('.name')
const pass1 = document.querySelector('.pass1')
const pass2 = document.querySelector('.pass2')
const errs = document.querySelector('.errs')
const Inputs = document.querySelector('.Inputs')

const btn = document.querySelector('.btn')
.addEventListener('click',send)


 
function send(e){

    const name = 'joao'
    ,pass = '123'

    if(pass === '' || name === ''){
        
        errs.innerHTML = 'digite algo valido'
        return e.preventDefault()
    
    }
    fetch('http://localhost:8080/login',{
        method:'POST',
        headers:  { 'Content-Type': 'application/json'},
        body:JSON.stringify({name:name,password:pass})
    
    }).then(response=>response.json())
       .then((res)=>{
           console.log(res)
           const {token} = res
            localStorage.setItem('token',token)
    
           window.location.href = 'http://127.0.0.1:5500/view/home.html'
           
       })
}
