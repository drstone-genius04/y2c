import React from "react";
import "./JoinSession.css";
const JoinSession = () => {
  return (
    <div className="join-session-container">
      <div className="desc">
        <p>It taking much time than usual assigining a best teacher for you</p>
      </div>
      <div className="desc " id="bold">
        <p>
          Expected waiting time <span>130</span> sec
        </p>
      </div>
      <div className="desc">
        <p>Mr teacher will be joined join session now</p>
      </div>
      <div className="desc" id="button">
        <button>Join Session</button>
      </div>
    </div>
  );
};

export default JoinSession;
