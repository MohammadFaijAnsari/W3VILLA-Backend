const express=require('express');
const app=express();
const PORT=8000;
const path=require('path');
const userRoute=require('./routes/user.js')
const mongoose=require('./db.connect.js');
app.use(express.urlencoded({extended:false}));
// View Engine
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

// Route
app.get('/',(req,res)=>{
    res.render('home');
})

app.use('/user',userRoute)

app.listen(PORT,()=>{
    console.log(`Server Started ${PORT}`);
})