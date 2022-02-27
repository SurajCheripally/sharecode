const http = require('http')

const server = http.createServer((req,res) => {
    res.write('Lets start suraj')
    res.end()
})

server.listen(5000)