const { ObjectId } = require("mongodb");
const { crud } = require('../model/crud_model');

const crudaddData = async (req, res) => {
   try {
      const { email } = req.body;
      const existingUser = await crud.findOne({ email: email });
      if (existingUser) {
         return res.status(400).json({
            Success: false,
            Message: "Email already exists!"
         });
      }
      const data = await crud.create(req.body);
      res.status(201).json({ Success: true, Data: data });
   } catch (err) {
      console.error("Error in /add route:", err);
      res.status(500).json({ Success: false, Message: err.message });
   }
};

const handleallData = async (req, res) => {
   try {
      const alldata = await crud.find({});
      res.status(200).json({ 
         Success: true,
         Data: alldata,
         TotalCount: alldata.length,
         allData: alldata
      });
   } catch (err) {
      console.error("Error in /get route:", err);
      res.status(500).json({ Success: false, Message: err.message });
   }
};

const handleDeleteData = async (req, res) => {
   const { id } = req.params;
   console.log("Deleting ID:", id);
   try {
      const deleted = await crud.findByIdAndDelete(id);
      console.log("Deleted Document:", deleted);
      if (deleted) {
         return res.json({
            Message: "One Record has Deleted",
            Success: true,
         });
      } else {
         return res.status(404).json({
            Message: "Record not found",
            Success: false,
         });
      }
   } catch (error) {
      res.status(500).json({
         Message: error.message,
         Success: false
      });
   }
};

// ✅ FIXED UPDATE ROUTE
const handleEditData = async (req, res) => {
   try {
      const body = req.body;
      if (!body?._id) {
         return res.status(400).json({
            Message: "ID is required for update",
            Success: false
         });
      }

      const updatedata = await crud.updateOne(
         { _id: new ObjectId(body._id) }, 
         { $set: body }
      );

      if (updatedata.matchedCount === 0) {
         return res.status(404).json({
            Message: "Record not found",
            Success: false
         });
      }

      if (updatedata.modifiedCount > 0) {
         return res.json({
            Message: "Data Updated Successfully",
            Success: true
         });
      } else {
         return res.status(200).json({
            Message: "No changes made",
            Success: false
         });
      }
   } catch (err) {
      res.status(500).json({
         Message: err.message,
         Success: false
      });
   }
};

module.exports = { crudaddData, handleallData, handleDeleteData, handleEditData };
