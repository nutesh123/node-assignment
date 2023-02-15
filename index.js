const http = require('http')

const server = http.createServer((req , res )=>{
    res.setHeader('Content-Type', 'text/html');
    if(req.url == '/home'){
        res.write('welcome to home ')
        res.end()
    }
    if(req.url == '/about'){
        res.write('welcome to about ')
        res.end()
    }
    else(req.url == '/node')
    {
        res.write('welcome to node js')
        res.end()
    }
    
   
})

server.listen(3000)