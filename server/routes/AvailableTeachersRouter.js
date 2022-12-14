const express = require("express");
const router = express.Router();
const AvailableTeachersModel = require("../model/AvailableTeachersModel");

router.post("/", (req, res) => {
  const { name, subject } = req.body;
  const availableTeacher = new AvailableTeachersModel({
    name: name,
    subject: subject,
  });
  availableTeacher
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Teacher created",
        Data: availableTeacher,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
router.get("/", (req, res) => {
  AvailableTeachersModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
