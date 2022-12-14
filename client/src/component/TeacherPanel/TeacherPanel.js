import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./TeacherPanel.css";
import classImage from "./images/training.png";
import earningImage from "./images/stepping-up.png";
import StudentClassList from "./list/StudentClassList";
import { DataState } from "../../DataContext/DataProvider";

const TeacherPanel = () => {
  const navigate = useNavigate();
  const { setClassHistoryList } = DataState();
  const showClassList = async () => {
    const header = {
      "Content-Type": "application/json",
    };
    await axios
      .get("http://localhost:5000/api/teacher-class-history", header)
      .then((res) => {
        setClassHistoryList(res.data);
        // console.log(res.data);
        navigate("/teacher-class-history");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="teacher-panel-container">
      <div className="teacher-panel-wrapper">
        <div className="heading">
          <h1>Your DashBoard</h1>
        </div>
        <div className="box-container ">
          <div className="boxs class-box " onClick={showClassList}>
            <div className="elements">
              <div className="left-content">
                <h4>12</h4>
                <span>classes</span>
              </div>
              <div className="image">
                <img src={classImage}></img>
              </div>
            </div>
          </div>
          <div className="boxs hours-box  ">
            <div className="elements">
              <div className="left-content">
                <h4>48</h4>
                <span>Hours</span>
              </div>
              <div className="image"></div>
            </div>
          </div>
          <div className="boxs stars-box  ">
            <div className="elements">
              <div className="left-content">
                <h4>278</h4>
                <span>Stars</span>
              </div>
              <div className="image"></div>
            </div>
          </div>
          <div className="boxs earning-box  ">
            <div className="elements">
              <div className="left-content">
                <h4>2999</h4>
                <span>Earning</span>
              </div>
              <div className="image">
                <img src={earningImage}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="global-map">
            <h5>Your Most of the student from</h5>
            <img width="100%" height="100%"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPanel;
