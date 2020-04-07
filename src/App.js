import React from "react";
import Welcome from "./components/Welcome";
import Details from "./components/Details";
import ListItems from "./components/ListItems";
import Checkout from "./components/Checkout";
import Print from "./components/Print";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Welcome />
      <Details />
      <ListItems />
      <Checkout />
      <Print />
    </React.Fragment>
  );
}

export default App;
