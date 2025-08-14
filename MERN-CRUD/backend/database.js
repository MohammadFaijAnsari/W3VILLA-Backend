const mongoose=require('mongoose')
const databaseConnection =async ()=>{
    mongoose.connect("mongodb+srv://mohammadfaijansari6:FaijAnsari99720@cluster0.dx8qmzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
       console.log("MongoDB Connect Sucessfully");
    }).catch((err)=>{
        console.log("Connection Error Message",err);
    });
}
module.exports= databaseConnection;