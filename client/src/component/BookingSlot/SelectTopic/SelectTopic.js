import React from "react";
import ControlButtons from "../ControlButtons/ControlButtons";
import "./SelectTopic.css";
const SelectTopic = () => {
  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="topic-container">
      <div className="form-group subject">
        <h2>Select Topic</h2>
        <select className="form-select" id="3">
          <option>Choose Subject...</option>
          {classes.map((el) => {
            return <option value={el}>{el}</option>;
          })}
        </select>
      </div>

      <ControlButtons path="/book-slot/select-sub-topic" />
    </div>
  );
};

export default SelectTopic;
