import React from "react";

const Request = () => {
  return (
    <div className="request">
      <div className="left-section">
        <div className="request-image">
          {/* <img width="100%" height="100%" alt="pic"></img> */}
        </div>
        <div className="details-section">
          <div className="request-question">
            <span>hello this is my question ?</span>
          </div>
          <div className="details">
            <div className="list ">
              <h6>Student Name</h6>
            </div>
            <div className="list ">
              <h6>Suject</h6>
            </div>
            <div className="list ">
              <h6>Standard</h6>
            </div>
            <div className="list">
              <h6>12sec ago</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="join-btn">
          <button className="btn btn-success">Join</button>
          <button className="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Request;
