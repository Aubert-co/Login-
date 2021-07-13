const route = require('express').Router()


const login = require('./login')
const cadastro = require('./cadastro')
const home = require('./home')
const middle = require('../middle/middleware')

const bodyParser = require('body-parser')
const cors = require('cors')



route.use(bodyParser.json())


route.use(cors())

route.use(login)
route.use(cadastro)
route.use('/auth',middle)

route.use('/auth',home)



module.exports = route