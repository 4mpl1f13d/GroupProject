import React, { Component } from "react";
import "../Details.css";

class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      make: "",
      keyword: "",
      model: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      make: event.target.value,
      keyword: event.target.value,
      model: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="form-top">
          <div class="form-group">
            <label for="exampleInputmake1">Make</label>
            <input
              placeholder="Type here..."
              name="make"
              value={this.state.make}
              onChange={this.changeHandler}
              type="name"
              class="form-control"
              id="makeInput"
            ></input>
            {/*<small id="makeHelp" class="form-text text-muted">
            We'll never share your make with anyone else.
    </small>*/}
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Model</label>
            <input
              placeholder="Type here..."
              type="model"
              class="form-control"
              id="modelInput"
            ></input>
          </div>
          <h6>OR</h6>
          <div class="form-group">
            <label for="exampleInputPassword1">Keyword</label>
            <input
              placeholder="Type here..."
              type="Keyword"
              class="form-control"
              id="KeywordInput"
            ></input>
          </div>

          <button type="submit" class="btn btn-primary">
            Add To List
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ItemDetails;
