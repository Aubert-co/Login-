const app = require('express')()

const route = require('./route/route')



const session = require('express-session')
//app.set('trust proxy', 1)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge:24*60*60 }
  }))
app.use(route)

app.listen(8080,()=>{
    console.log('rodando 8080')
})

module.exports = app