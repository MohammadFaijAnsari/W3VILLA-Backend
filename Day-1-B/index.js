const http=require('http');
const port=3000;
const server=http.createServer((req,res)=>{
    // console.log("Hello World in Node JS");
    res.write("Hello World in Node JS");
    res.end();
})

server.listen(port,()=>{
    console.log("Server Started in ",port);
});