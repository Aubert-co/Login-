const route = require('express').Router()
const login = require('./login')
const cadastro = require('./cadastro')
const bodyParser = require('body-parser')
const cors = require('cors')
route.use(bodyParser.json())
route.use(cors)
route.use(login)
route.use(cadastro)

module.exports = route