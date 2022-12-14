const mongoose = require("mongoose");

const availableTeachers = mongoose.Schema({
  name: String,
  subject: String,
});

const AvailableTeachers = mongoose.model(
  "AvailableTeachers",
  availableTeachers
);

module.exports = AvailableTeachers;
