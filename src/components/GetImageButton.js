import React, { Component } from "react";

export default class GetImageButton extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <input
          type="button"
          value="submit"
          onClick={this.props.action}
          style={{
            backgroundColor: "black",
            color: "rgb(60, 188, 141)",
            padding: "5px 20px",
            margin: "1rem",
            borderRadius: 4,
            fontSize: 20
          }}
        />
      </div>
    );
  }
}
