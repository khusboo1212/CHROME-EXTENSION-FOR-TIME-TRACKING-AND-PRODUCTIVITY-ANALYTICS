const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  siteData: Object,
  date: Date,
});

module.exports = mongoose.model("UserData", userDataSchema);
