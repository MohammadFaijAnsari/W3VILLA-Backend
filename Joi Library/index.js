
const express=require('express');
const Joi = require('joi');
const app=express();
const PORT=8000;
app.use(express.json())
// Jie Apply
const homeSighma=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(3).max(6).required()
});

app.post('/signUp',(req,res)=>{
    console.log(req.body);
    const {error,value}=homeSighma.validate(req.body);
    if(error){
        console.log(error);
        res.end(error.details);
    }else{
        console.log("Validate");
        res.end("success")
    }
})

// Server Start 
app.listen(PORT,(req,res)=>{
    console.log("Server Started",PORT)
})