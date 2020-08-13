import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      incomings: []
    };
  }

  render() {
    return (
      <>
        <p className="display-4">Dashboard</p>
      </>
    );
  }
}

export default Dashboard;
