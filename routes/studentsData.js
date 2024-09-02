const express = require("express");
const router = express.Router();

const StudentSchemaData = require("../model/studentsSchema");

//Create
router.post("/", async (request, response) => {
  try {
    const data = request.body; // Assuming the request body contains the Products data
    const newData = new StudentSchemaData(data); // Create a new Data
    const postData = await newData.save(); // Save the new Data to the database
    response.status(200).json({
      msg: "Thank you! Your Data Created successfully...",
    });
  } catch (e) {
    response.status(500).json({ error_msg: "Internal Server Error.." });
  }
});

//Read
router.get("/", async (request, response) => {
  try {
    const data = request.body;
    const getData = await StudentSchemaData.find(data);
    response.status(200).json(getData);
  } catch (e) {
    response.status(500).json("Internal Server Error..");
  }
});

//Update
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params; // Extract the id from the URL parameter
    const data = request.body;

    const updateData = await StudentSchemaData.findByIdAndUpdate(id, data, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    });
    response.status(200).json({
      msg: "Thank you! Your Data has been Updated successfully...",
    });
  } catch (e) {
    response.status(500).json("Internal Server Error..");
  }
});

//Delete
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params; // Extract the id from the URL parameter

    const deletedData = await StudentSchemaData.findByIdAndDelete(id);
    response.status(200).json({
      msg: "Thank you! Your Data has been Deleted successfully...",
    });
  } catch (e) {
    response.status(500).json("Internal Server Error..");
  }
});

module.exports = router;