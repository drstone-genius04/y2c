import React from "react";
import "./TeacherRequest.css";
import Request from "./Request";
const TeacherRequestList = () => {
  return (
    <div className="request-list-container">
      <div className="request-list-wrapper">
        <div className="heading">
          <h3>Available Students</h3>
        </div>
        <div className="search-section">
          <div className="input-place">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Search Discussion"></input>
          </div>
          <button className="btn btn-dark search-topic-btn">
            Search Topic
          </button>
        </div>
        <div className="topic-suggestions-container">
          <div className="suggestions">
            <span>Machine Learning</span>
          </div>
          <div className="suggestions">
            <span>IoT</span>
          </div>
          <div className="suggestions">
            <span>Data Structure</span>
          </div>
          <div className="suggestions">
            <span>more</span>
          </div>
        </div>
        <div className="refresh-btn">
          <button className="btn btn-dark">
            <i className="fa fa-refresh"></i>
          </button>
        </div>
        <div className="requests-list-container">
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
          <Request />
        </div>
      </div>
    </div>
  );
};

export default TeacherRequestList;
