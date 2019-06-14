import React from "react";
import PropTypes from "prop-types";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = props => {
  return (
    <div className="friendCard">
      <div
        onClick={event => props.deleteFriend(event, props.id)}
        className="deleteButton"
      >
        <h3>X</h3>
      </div>
      <div className="cardTop">
        <h2>{props.name}</h2>
        <p className="ageCSS">Age: {props.age}</p>
      </div>
      <p className="emailCSS">{props.email}</p>
      <Link to={`/FriendUpdate/${props.id}`}>
        <button className="updateButton">Update</button>
      </Link>
    </div>
  );
};

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired
};

export default Friend;
