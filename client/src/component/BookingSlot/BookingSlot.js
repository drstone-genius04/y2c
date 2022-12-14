import React, { useState } from "react";
import "./BookingSlot.css";
import { useNavigation, BrowserRouter, Route, Routes } from "react-router-dom";
import DescTopic from "./DescTopic/DescTopic";
import TeachersList from "./TeacherList/TeachersList";
import SelectClass from "./SelectClass/SelectClass";
import SelectTopic from "./SelectTopic/SelectTopic";
import SelectSubTopic from "./SelectSubTopic/SelectSubTopic";
import { DataState } from "../../DataContext/DataProvider";
const BookingSlot = () => {
  const { showTeacherBox, availableTeachers } = DataState();
  console.log(availableTeachers);

  return (
    <div className="booking-container">
      <div className="booking-wrapper">
        <div className="book-slot">
          <div className="booking-details">
            <Routes>
              <Route path="/" element={<DescTopic />} />
              <Route path="/select_class" element={<SelectClass />} />
              <Route path="/select_topic" element={<SelectTopic />} />
              <Route path="/select-sub-topic" element={<SelectSubTopic />} />
            </Routes>
          </div>
        </div>
        <div className="teachers-list">
          <div className="teacher-list-heading">
            <h2>Available Teachers List</h2>
          </div>

          <div className="teacher-list-container">
            {showTeacherBox
              ? availableTeachers.map((el) => <TeachersList data={el} />)
              : " "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSlot;
