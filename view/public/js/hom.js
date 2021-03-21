const token = localStorage.getItem('token')

fetch('http://localhost:8080/auth/home',{
    headers:{
        'x-api-token':'token'
    }
})
    .then((res)=>{
        if(res.status===401)return console.log('error')

       return res.json()
    })