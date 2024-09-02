const mongoose = require("mongoose");

const mongooseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
const StudentSchemaData = mongoose.model("Student", mongooseSchema);
module.exports = StudentSchemaData;