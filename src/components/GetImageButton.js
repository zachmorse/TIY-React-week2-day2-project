import React, { Component } from "react";

export default class GetImageButton extends Component {
  render() {
    return (
      <div>
        <input type="button" value="submit" onClick={this.props.action} />
      </div>
    );
  }
}
