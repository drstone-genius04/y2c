import React from "react";
import "./TeacherList.css";
import image from "../../../images/teacher.jpg";
const TeachersList = ({ data }) => {
  return (
    <div className="teacher">
      <div className="photo-name">
        <div className="teacher-photo">
          <img src={image} height="100%" width="100%"></img>
        </div>
        <div className="name-address">
          <h6>{data.name}</h6>
          <p>{data.subject}</p>
        </div>
      </div>

      <div className="teacher-rating">
        {/* <h6>rating</h6> */}
        <p>5.6/10</p>
      </div>
    </div>
  );
};

export default TeachersList;
