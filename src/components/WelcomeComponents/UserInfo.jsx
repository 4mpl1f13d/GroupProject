import React, { Component } from "react";
import "../Welcome.css";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      name: event.target.value,
      email: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="form-top">
          <h4 color="skyblue">User info</h4>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              placeholder="Type here..."
              name="name"
              value={this.state.email}
              onChange={this.changeHandler}
              type="name"
              class="form-control"
              id="nameInput"
            ></input>
            {/*<small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
    </small>*/}
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Address</label>
            <input
              placeholder="Type here..."
              type="address"
              class="form-control"
              id="addressInput"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone</label>
            <input
              placeholder="Type here..."
              type="phone"
              class="form-control"
              id="phoneInput"
            ></input>
          </div>

          <button type="submit" class="btn btn-primary">
            To GoodWill
          </button>
          <h6>OR</h6>
          <button type="submit" class="btn btn-primary">
            Private Party
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default UserInfo;
