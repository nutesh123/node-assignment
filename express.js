const express = require('express')

const app = express()

app.use((req, res, next)=>{
    console.log('in the middleware')
    next()
})

app.use((req, res, next)=>{
    console.log('in the another middleware')
    res.send('heloww worlddd')
})

app.listen(3000)