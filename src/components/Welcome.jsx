import React, { Component } from "react";
import "./Welcome.css";
import UserInfo from "./WelcomeComponents/UserInfo";

class Welcome extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 color="skyblue">Donate APP</h1>
        <p>Your donation taxes made easy</p>
        <UserInfo />
      </div>
    );
  }
}

export default Welcome;
