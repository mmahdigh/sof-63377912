import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isLoggedIn: false
    };

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(newEmail) {
    console.log(`Entered User.updateUser, email: ${newEmail}`);
    /* this.setState({
            email: newEmail,
            isLoggedIn: false
        }); */
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Dashboard />;
    }

    return <Login updateTheUser={this.updateUser} />;
  }
}

export default User;
