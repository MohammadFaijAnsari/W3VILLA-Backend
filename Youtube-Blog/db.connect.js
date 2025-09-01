const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/blogify')
mongoose.connect("mongodb+srv://mohammadfaijansari6:FaijAnsari99720@cluster0.dx8qmzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(e=>console.log("MongoDB Connected Sucessfully"))

module.exports=mongoose;