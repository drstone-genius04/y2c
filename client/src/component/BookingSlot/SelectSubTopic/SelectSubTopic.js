import React from "react";
import { useNavigate } from "react-router-dom";
import { DataState } from "../../../DataContext/DataProvider";
import "./SelectSubTopic.css";
import axios from "axios";
const SelectSubTopic = () => {
  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { setShowTeacherBox, setAvailableTeachers } = DataState();
  const navigate = useNavigate();
  const prevPage = () => {
    navigate(-1);
  };
  const showTutors = () => {
    setShowTeacherBox(true);
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get("http://localhost:5000/api/available-teacher", headers)
      .then((res) => setAvailableTeachers(res.data))
      // .then((res) => console.log(res.data))
      .catch((err) => alert(err.message));
  };
  return (
    <div className="subtopic-container">
      <div className="form-group">
        <h2>Select Sub-Topic</h2>
        <select className="form-select">
          <option>Choose Class...</option>
          {classes.map((el) => {
            return <option value={el}>{el}</option>;
          })}
        </select>
      </div>
      <div className="connect-tutor">
        <button onClick={prevPage} className="btn btn-primary">
          Prev
        </button>
        <button onClick={showTutors} className="btn btn-success">
          Show Tutors
        </button>
      </div>
    </div>
  );
};

export default SelectSubTopic;
