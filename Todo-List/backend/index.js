const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors({
  origin: "https://todo-frontend-yb5r.onrender.com"
}));

app.use(express.json()); // ✅ correct middleware

// MongoDB connection
const mongo = require('./connection');
mongo();

// Model
const TodoModel = require('./Models/Todo');
// Add Data API
app.post('/add', (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});
// Get All Data API

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
})

// Delete API
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndDelete(id)
    .then(result=>res.json(result))
    .catch(err=>{res.json(err)})

})
app.listen(PORT, () => {
  console.log(`Server Started = ${PORT}`);
});
