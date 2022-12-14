import React from "react";
import "./OneToOneIntro.css";
import { useNavigate } from "react-router-dom";
const OneToOneIntro = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/book-slot");
  };
  return (
    <div className="intro-container ">
      <div className="intro-wrapper">
        <h1>Welcome to OneToOne Class</h1>
        <div className="get-started-btn">
          <button btn onClick={handleGetStarted}>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneToOneIntro;
