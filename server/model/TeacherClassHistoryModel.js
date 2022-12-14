const mongoose = require("mongoose");

const teacherClassList = mongoose.Schema({
  sno: Number,
  name: String,
  date: String,
  stars: Number,
  duration: String,
});

const TeacherClassListModel = mongoose.model(
  "TeacherClassListModel",
  teacherClassList
);

module.exports = TeacherClassListModel;
