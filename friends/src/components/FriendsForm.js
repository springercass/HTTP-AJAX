import React from "react";

const FriendsForm = props => {
  return (
    <div className="formCSS">
      <h2>Join My Friends!</h2>
      <form onSubmit={props.addFriend} className="friendsFormCSS">
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
        <button className="addFriend">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendsForm;
