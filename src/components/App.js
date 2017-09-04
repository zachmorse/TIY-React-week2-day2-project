import React, { Component } from "react";

import GetImageForm from "./GetImageForm";

class App extends Component {
  render() {
    let style = {
      headerStyle: {
        textAlign: "center",
        fontSize: 100,
        fontWeight: "bold",
        margin: "0rem"
      }
    };
    return (
      <div>
        <h1 style={style.headerStyle}>MARS ROVER API</h1>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
