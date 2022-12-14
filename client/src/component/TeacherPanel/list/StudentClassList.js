import React from "react";
import ClassList from "./ClassList";
import "./StudentClassList.css";
import chevLeft from "./img/chevron-left.png";
import chevRight from "./img/chevron-right.png";
import imgDisplay from "./img/group.png";
import { DataState } from "../../../DataContext/DataProvider";
const StudentClassList = () => {
  const { classHistoryList } = DataState();
  return (
    <div className="class-list-container">
      <div className="class-list-wrapper">
        <div className="heading">
          <div className="left-content">
            <div className="serial-no">
              <span>No</span>
            </div>
            <div className="name">
              <span>Name</span>
            </div>
          </div>
          <div className="middle-content">
            <div className="date">
              <span>Date</span>
            </div>
            <div className="stars">
              <span>Stars</span>
            </div>
            <div className="duration">
              <span>Duration</span>
            </div>
          </div>
          <div className="right-content">
            <span>Report User</span>
          </div>
        </div>
        <div className="body">
          {classHistoryList.map((el) => (
            <ClassList data={el} />
          ))}
        </div>
        <div className="footer">
          <div className="left-content">
            <span>Showing 1 to 20</span>
          </div>
          <div className="right-content">
            <div className="display">
              <button>
                display
                <img src={imgDisplay}></img>
              </button>
            </div>
            <div className="pagination">
              <button className="btn btn-danger">
                <img src={chevLeft}></img>
              </button>
              <button className="btn ">1</button>
              <button className="btn ">2</button>
              <button className="btn ">3</button>
              <button className="btn ">
                <img src={chevRight}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentClassList;
