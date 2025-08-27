const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogify')
.then(e=>console.log("MongoDB Connected Sucessfully"))

module.exports=mongoose;