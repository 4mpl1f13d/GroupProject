import React, { Component } from "react";
import "./Welcome.css";
import Test from "./WelcomeComponents/UserInput";

class Welcome extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 color="skyblue">Donate APP</h1>
        <p>Your donation taxes made easy</p>
        <Test />
      </div>
    );
  }
}

export default Welcome;
