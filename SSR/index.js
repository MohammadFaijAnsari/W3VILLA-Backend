const express=require('express');
const app=express();
const path=require('path');
const staticRouter=require('./routers/staticRouter')
// ejs used require
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
// Middlware

app.use('/',staticRouter);



// app.router('/test',(req,res)=>{
//     return res.render('home');
// })

app.listen(8000,()=>{
    console.log("Server Started");
})