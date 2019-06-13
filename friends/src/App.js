import React from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import FriendsList from "../src/components/FriendsList";
import FriendsForm from "../src/components/FriendsForm";

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

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });
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
        console.log(response);
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <FriendsForm
          {...this.state}
          handleChange={this.handleChange}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

export default App;
