import React, { Component } from "react";
import "../styles/App.css";

import GetImageForm from "./GetImageForm";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Fetch images from the Mars Rover</h1>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
