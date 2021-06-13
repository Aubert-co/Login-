const token = localStorage.getItem('token')
const DivAuth = document.querySelector('.auth')
const logout = document.querySelector('.logout')
logout.addEventListener('click',logoutFunc)


const get = async()=>{
try{
    const headers = {'x-api-token':token}
    const method = "GET"
    const URL = 'http://192.168.100.54:8080/auth/home'
    const response = await fetch(URL,{headers,method})

    const {msg,status} = await response.json()

    if(status === 401){
        window.location.href = 'login.html'
        DivAuth.innerHTML = msg
    }
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

