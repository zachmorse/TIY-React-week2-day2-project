import React, { Component } from "react";

export default class ImageDisplay extends Component {
  render() {
    let images = this.props.images;
    console.log(images);
    let key = 0;
    let roverPictures = images.map(images => {
      key++;
      return (
        <div key={key}>
          <img src={images.img_src} alt="mars rover" />
        </div>
      );
    });
    return (
      <div>
        {roverPictures}
      </div>
    );
  }
}
