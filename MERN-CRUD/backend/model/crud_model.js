const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   city: {
      type: String,
      required: true
   },
   code: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      required: true
   }
}, { timestamps: true });

const crud = mongoose.model('crud', crudSchema);
module.exports = { crud };
