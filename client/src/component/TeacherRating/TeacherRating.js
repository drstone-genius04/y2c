import React, { useEffect, useState } from "react";
import "./TeacherRating.css";

const TeacherRating = () => {
  const [clock, setClock] = useState(60);

  const starClickHandler = (e) => {
    for (let i = 1; i <= e.target.id; i++) {
      const ele = document.getElementById(i);
      ele.classList.add("checked");
    }
  };

  return (
    <div className="rating-container">
      <div className="time-counter-container">
        <p>
          <span>{clock}</span>Returning to home screen
        </p>
      </div>
      <div className="rating-wrapper">
        <h2>You've ended the meeting for everyone</h2>
        <button className="btn btn-primary">Return to home screen</button>
        <div className="stars-container">
          <h6>How was the audio and video until then ?</h6>
          <div className="stars">
            <i id="1" onClick={starClickHandler} className="fa fa-star-o"></i>
            <i id="2" onClick={starClickHandler} className="fa fa-star-o"></i>
            <i id="3" onClick={starClickHandler} className="fa fa-star-o"></i>
            <i id="4" onClick={starClickHandler} className="fa fa-star-o"></i>
            <i id="5" onClick={starClickHandler} className="fa fa-star-o"></i>
          </div>
          <div className="how-was-that">
            <span>Very bad</span>
            <span>Very good</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherRating;
