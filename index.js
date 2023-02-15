const http = require('http')

const server = http.createServer((req , res )=>{
    res.write('nutesh ')
    res.end()
})

server.listen(3000)