import React from "react";
import Friend from "../components/Friend";

const FriendsList = props => {
  return (
    <div className="friendsListCSS">
      {props.friends.map(friend => (
        <Friend deleteFriend={props.deleteFriend} key={friend.id} {...friend} />
      ))}
    </div>
  );
};

export default FriendsList;
