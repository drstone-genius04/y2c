import React from "react";
import ControlButtons from "../ControlButtons/ControlButtons";
import "./SelectClass.css";
const SelectClass = () => {
  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="class-container">
      <div className="form-group ">
        <h2>Select Class</h2>
        <select className="form-select">
          <option id="choose-class">Choose Class...</option>
          {classes.map((el) => {
            return <option value={el}>{el}</option>;
          })}
        </select>
      </div>
      <ControlButtons path="/book-slot/select_topic" />
    </div>
  );
};

export default SelectClass;
