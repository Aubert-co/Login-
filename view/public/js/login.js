const form = document.querySelector('form')

const namee = document.querySelector('.name')
const pass1 = document.querySelector('.pass1')
const pass2 = document.querySelector('.pass2')
const errs = document.querySelector('.errs')
const Inputs = document.querySelector('.Inputs')

const btn = document.querySelector('.btn')
.addEventListener('click',send)



 function send(e){

    const pass = pass1.value
    const name = namee.value

    if(pass === '' || name === ''){
        
        errs.innerHTML = 'digite algo valido'
        return e.preventDefault()
    
    }
    fetch('http://localhost:8080/login',{
        method:'POST',
        headers:  { 'Content-Type': 'application/json'},
        body:JSON.stringify({name:name,pass:pass})
    
    }).then(response=>response.json())
       .then((res)=>{
           const {sucess ,err} = res
           if(sucess !== undefined){
               return   errs.innerHTML = sucess
           }
           errs.innerHTML = err
           
       })
   
      
}