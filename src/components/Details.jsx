import React, { Component } from "react";
import "./Details.css";
import ItemDetails from "./DetailsComponents/ItemDetails";

class Details extends Component {
  render() {
    return (
      <div className="details container-fluid">
        <h1 color="skyblue">Item Details</h1>
        <ItemDetails />
      </div>
    );
  }
}

export default Details;
