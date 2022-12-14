import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <div className="teacher-video">
          <h1>Teacher </h1>
        </div>
        <div className="footer-section">
          <div className="controls">
            <button>close</button>
            <button>chat</button>
            <button>Ask</button>
            <button>chat</button>
          </div>
          <div className="student-video">
            <h1>Student</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
