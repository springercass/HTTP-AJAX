import React from "react";
import "./App.css";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import FriendsList from "../src/components/FriendsList";
import FriendsForm from "../src/components/FriendsForm";
import FriendUpdate from "./components/FriendUpdate";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  getFriends = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getFriends(id);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addFriend = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: parseInt(this.state.age),
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  deleteFriend = (event, id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  updateFriend = (event, updated, id) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${id}`, updated)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="Body">
        <Route
          exact
          path="/"
          render={props => (
            <div className="App">
              <FriendsList
                {...props}
                deleteFriend={this.deleteFriend}
                friends={this.state.friends}
              />
              <FriendsForm
                {...props}
                friends={this.state.friends}
                handleChange={this.handleChange}
                addFriend={this.addFriend}
                id={this.id}
              />{" "}
            </div>
          )}
        />

        <Route
          path="/FriendUpdate/:id"
          render={props => (
            <FriendUpdate
              {...props}
              friends={this.state.friends}
              handleChange={this.handleChange}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
