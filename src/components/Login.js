import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

const users = [{ email: "mahdi@gmail.com", password: 1111 }];

const mockServer = (body) =>
  new Promise((res, reject) => {
    const object = JSON.parse(body);
    console.log("obj", object);
    console.log(users[0]);
    const index = users.findIndex(
      (item) =>
        item.email === object.email && item.password === Number(object.password)
    )
    console.log(index);
    if (index !== -1)
      res("success");
    reject("fail");
  });

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleResponse(res) {
    console.log(res);
    if (res === "success") {
      alert("Login Successful!");
      this.props.updateTheUser(this.state.email);
    } else if (res === "fail") {
      alert("Wrong Username or Password");
    }
  }

  async sendLoginRequest(data) {
    /* await fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data
    }) */
    console.log(data);
    try {
      const res = await mockServer(data);
      this.handleResponse(res);
    } catch (err) {
      console.error(err);
      alert("Server error, please try again.");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // const data = `{"email": "${this.state.email}", "password": "${this.state.password}"}`
    const data = { email: this.state.email, password: this.state.password };
    this.sendLoginRequest(JSON.stringify(data));
  }

  render() {
    return (
      <div id="container" className="col-md-12" align="center">
        <div id="vertical-center-div" className="col-sm-4 card bg-light">
          <div>
            {users.map((item) => (
              <div>
              <p> {item.email} </p>
              <p> {item.password} </p>
              </div>
            ))}
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label className="display-4 text-secondary">Login</Form.Label>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button id="submitButton" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
