import React from "react";
import PropTypes from "prop-types";
import "./Friend.css";

const Friend = props => {
  return (
    <div className="friendCard">
      <div className="cardTop">
        <h2>{props.name}</h2>
        <p className="ageCSS">Age: {props.age}</p>
      </div>
      <p className="emailCSS">{props.email}</p>
    </div>
  );
};

Friend.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string
};

export default Friend;
