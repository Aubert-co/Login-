const app = require('express')()

const route = require('./route/route')

app.use(route)
app.listen("8080",()=>{
    console.log('rodando 8080')
})