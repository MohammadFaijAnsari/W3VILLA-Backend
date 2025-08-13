const mongoose=require('mongoose')
const databaseConnection =async ()=>{
    mongoose.connect("mongodb://localhost:27017/")
    .then(()=>{
       console.log("MongoDB Connect Sucessfully");
    }).catch((err)=>{
        console.log("Connection Error Message",err);
    });
}
module.exports= databaseConnection;