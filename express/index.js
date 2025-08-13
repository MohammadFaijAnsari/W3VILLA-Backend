const express=require('express');
const port=8000;
const app=express();

app.get('/',(req,res)=>{
    return res.send("Home Page");``
    // console.log("Home Page");
})
app.get('/about',(req,res)=>{
  return res.send("About Page"+req.query.name+"Age is "+req.query.age)
    // console.log("About Page");
})

app.listen(port,()=>{
    console.log("Server is started",port);
})