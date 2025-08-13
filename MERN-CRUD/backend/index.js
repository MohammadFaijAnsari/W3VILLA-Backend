const express=require('express');
const app=express();
const cors=require('cors');
// Import Database 
const databaseConnection=require('./database.js');
// Database Connection Called
databaseConnection();
// Import Router 
const router=require('./routes/crud_routes.js');
const { crud } = require('./model/crud_model.js');
// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Route Create
app.use('/',router);
// app.post("/add", );


app.listen(8000,()=>{
    console.log("Server Connected Sucessfully");
})