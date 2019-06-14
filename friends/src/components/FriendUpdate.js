import React from "react";
import { Link } from "react-router-dom";

const UpdateFriendsForm = props => {
  return (
    <div className="body">
      <div className="formCSS">
        <h2>Update Your Information</h2>
        <form
          onSubmit={event => props.updateFriend(event, props.id)}
          className="friendsFormCSS"
        >
          <input
            type="text"
            name="name"
            placeholder="What's your name?"
            value={props.name}
            className="friendInput"
            onChange={props.handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="How old are you?"
            value={props.age}
            className="friendInput"
            onChange={props.handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Where can I email you?"
            value={props.email}
            className="friendInput"
            onChange={props.handleChange}
          />
          <button className="addFriend">Update</button>
        </form>{" "}
        <Link to="/">
          <button className="returnHome">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateFriendsForm;
