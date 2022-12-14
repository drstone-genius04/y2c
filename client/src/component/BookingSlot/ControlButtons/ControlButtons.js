import React from "react";
import { useNavigate } from "react-router-dom";
import "./ControlButtons.css";

const ControlButtons = (props) => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate(props.path);
  };
  const prevPage = () => {
    navigate(-1);
  };
  return (
    <div className="control-btns">
      <div onClick={prevPage} className="btn btn-primary">
        Prev
      </div>
      <div onClick={nextPage} className="btn btn-primary">
        Next
      </div>
    </div>
  );
};

export default ControlButtons;
