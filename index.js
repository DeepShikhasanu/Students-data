const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//db.js
const db = require("./db");

// Use CORS to handle cross-origin requests
const cors = require("cors");
app.use(cors());

//Blogs Route
const studentRoute = require("./routes/studentsData");
app.use("/data", studentRoute);

//.env
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Runing... http://localhost:3000/");
});