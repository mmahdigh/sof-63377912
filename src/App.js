import React, { Component } from "react";
import User from "./components/User";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route path="/" component={User} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              {/* <Redirect from="/" to="" exact /> */}
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
