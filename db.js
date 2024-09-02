const mongoose = require("mongoose");

require("dotenv").config();

const mongooseURL = process.env.MONGOODB_UR;

const db = async () => {
  try {
    await mongoose.connect(mongooseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected..");
  } catch (e) {
    console.log(e);
  }
};
db(mongoose.connection);
module.exports = db;