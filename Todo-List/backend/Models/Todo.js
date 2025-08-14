const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
   task:String
},{
   timestamps:true
}
);

const TodoModel=mongoose.model('data',TodoSchema);
module.exports=TodoModel;
