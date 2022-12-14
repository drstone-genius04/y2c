import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControlButtons from "../ControlButtons/ControlButtons";
import "./DescTopic.css";
const DescTopic = () => {
  const navigate = useNavigate();
  const [descTopic, setDescTopic] = useState();
  const nextPage = () => {
    navigate("/book-slot/select_class");
  };
  return (
    <div className="desc-container">
      <div className="form-group">
        <h3>Describe Topic.</h3>
        <textarea
          value={descTopic}
          className="form-control"
          rows="10"
          id="desc-topic"
          onChange={(e) => {
            setDescTopic(e.target.value);
          }}
        ></textarea>
        <div className="next-btn">
          <div onClick={nextPage} className="btn btn-primary">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescTopic;
