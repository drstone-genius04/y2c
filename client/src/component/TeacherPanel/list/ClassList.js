import React from "react";

const Rating = () => <i className="fa fa-star"></i>;

const ClassList = ({ data }) => {
  const { sno, name, date, stars, duration } = data;
  var Ratings = [];
  for (let i = 0; i < stars; i++) {
    Ratings.push(<Rating />);
  }
  console.log(data._id);
  return (
    <div id={data._id} className="class-details">
      <div className="left-content">
        <div className="serial-no">
          <span>{sno}</span>
        </div>
        <div className="name">
          <span>{name}</span>
        </div>
      </div>
      <div className="middle-content">
        <div className="date">
          <span>{date.slice(15)}</span>
        </div>
        <div className="stars">
          {Ratings.map((el) => (
            <Rating />
          ))}
        </div>
        <div className="duration">
          <span>{duration}</span>
        </div>
      </div>
      <div className="right-content">
        <button className="btn btn-danger">Report</button>
      </div>
    </div>
  );
};

export default ClassList;
