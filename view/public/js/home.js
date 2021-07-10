const token = localStorage.getItem('token')
const DivAuth = document.querySelector('.auth')

const body = document.querySelector('body')



 async function  get (){
try{
    const headers = {'x-api-token':token}
    const method = "GET"
    const URL = 'http://192.168.100.54:8080/auth/home'
    const response = await fetch(URL,{headers,method})

    const {msg,status} = await response.json()

    if(status === 401){
        window.location.href = 'login.html'
        DivAuth.innerHTML = msg
        return 
    }
    layout()
    }catch(err){
        if(err)window.location.href = "login.html"
    }
}
get()


async function logoutFunc (){
    try{
        const URL = 'http://192.168.100.54:8080/logout'
        const headers = {'x-api-token':token}
        const method = "GET"
        const response = await fetch(URL,{headers,method}) 

        const {msg,status} = await response.json()

        const removToken = localStorage.removeItem('token')
        
        window.location.href = 'login.html'
    }catch(err){
        if(err)throw err
    }
}

function layout(){
body.innerHTML = `
<div class="container">
<div class="header">
        <a href="#" class="logout">logout</a>
</div>
<div class="main">
 
      
    <div class="auth">
        Welcome
    </div>
</div>
<div class="aside1">aside1</div>
<div class="aside2">aside2</div>
<div class="footer">footer</div>
</div>

`
const logout = document.querySelector('.logout')
logout.addEventListener('click',logoutFunc)
}

