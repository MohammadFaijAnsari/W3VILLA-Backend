// Libraray InstallThird Party
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./db");

// Import db.js File
const db = require("./db");

// Use Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

(async () => {
 try{
  await sequelize.authenticate();
  console.log("MYSQL Database Connected Successfully");
 }catch(err){
  console.log("error",err);
 }
})();

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
