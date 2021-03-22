const token = localStorage.getItem('token')
const DivAuth = document.querySelector('.auth')
const logout = document.querySelector('.logout')


const get = async()=>{
try{
    const response = await fetch('http://192.168.100.54:8080/auth/home',{headers:{'x-api-token':token}})

    const {msg,status} = await response.json()

    if(status === 401){
        window.location.href = 'login.html'
        DivAuth.innerHTML = msg
    }
    }catch(err){
        if(err)throw err
    }
}
get()

/*
function get (){
    fetch('http://192.168.100.54:8080/auth/home',{headers:{'x-api-token':'token'}})
        .then((res)=>res.json())
        .then((datas)=>{
            const {msg,status} = datas
            alert(status)
            if(status === 401){
                alert('proibida')
                window.location.href = 'login.html'
                DivAuth.innerHTML = msg
            }
        })
        .catch((err)=>{
            if(err)console.log(err)
        })
}
get()
*/
const logoutFunc = async()=>{
    try{
        const response = await fetch('http://192.168.100.54:8080/logout',{headers:{'x-api-token':token}}) 

        const {msg,status} = await response.json()

        const removToken = localStorage.removeItem('token')
        
        window.location.href = 'login.html'
    }catch(err){
        if(err)throw err
    }
}

logout.addEventListener('click',logoutFunc)