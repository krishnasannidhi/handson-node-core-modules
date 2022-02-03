const http = require('http');

const httpServer = http.createServer((req, res)=>{
    res.end("Hello World!");
});

httpServer.listen(12345, ()=>{
    console.log("this server listening on port 12345");
})