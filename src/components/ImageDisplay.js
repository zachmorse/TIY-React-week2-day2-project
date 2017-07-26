import React, { Component } from "react";

export default class ImageDisplay extends Component {
  photoChecker() {
    if (!this.props.images.length) {
      return <div>No images found.</div>;
    }
  }

  render() {
    let style = {
      pictureBox: {
        display: "flex",
        justifyContent: "center"
      },
      imageStyle: {
        display: "block",
        maxWidth: 500,
        maxHeight: 500,
        width: "auto",
        height: "auto",
        margin: 10
      },
      divStyle: {
        maxHeight: 510,
        maxWidth: 520,
        display: "flex",
        flexDirection: "row",
        overflow: "scroll"
      }
    };

    let images = this.props.images;

    let key = 0;
    let roverPictures = images.map(images => {
      key++;
      return (
        <div key={key}>
          <a href={images.img_src}>
            <img
              src={images.img_src}
              alt="mars rover"
              style={style.imageStyle}
            />
          </a>
        </div>
      );
    });
    return (
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem" }}>
          (scroll left/right for multiple pictures. click for full size.)
        </p>
        <div style={style.pictureBox}>
          <div style={style.divStyle}>
            {this.photoChecker()}
            {roverPictures}
          </div>
        </div>
      </div>
    );
  }
}
