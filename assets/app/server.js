const express = require('express')
const myRoutes = require('./routes')
const app = express()

app.use(express.static('public'))

app.use('/' , myRoutes)

app.listen(3000 , error => {
    console.log('app currently running @ http://localhos:3000; press ctrl+c to cancel.')
})