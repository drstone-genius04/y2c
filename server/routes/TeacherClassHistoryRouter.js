const express = require("express");
const { Model } = require("mongoose");
const router = express.Router();
const Class = require("../model/TeacherClassHistoryModel");

const StudentClassListModel = require("../model/TeacherClassHistoryModel");

router.post("/", (req, res) => {
  const { sno, name, date, stars, duration } = req.body;
  const classHistory = new Class({
    sno: sno,
    name: name,
    date: new Date(),
    stars: stars,
    duration: duration,
  });
  classHistory
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Class created",
        Data: classHistory,
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
  Class.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
