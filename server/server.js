const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const TeacherClassHistoryRouter = require("./routes/TeacherClassHistoryRouter");
const AvailableTeachersRouter = require("./routes/AvailableTeachersRouter");

const App = express();

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(cors());

mongoose.set("strictQuery", true);
const URL = "mongodb://localhost:27017/ycy-class";
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

App.use("/api/teacher-class-history", TeacherClassHistoryRouter);
App.use("/api/available-teacher", AvailableTeachersRouter);

const PORT = 5000;
App.listen(PORT, () => console.log(`server running on port ${PORT}`));
