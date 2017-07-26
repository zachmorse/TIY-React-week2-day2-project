import React, { Component } from "react";
import GetImageButton from "./GetImageButton";
import ImageDisplay from "./ImageDisplay";

export default class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "1000",
      imagesURL: ""
    };
  }

  componentDidMount() {
    this.fetchRoverImage();
  }

  handleRover = e => {
    this.setState({ rover: e.target.value }, this.fetchRoverImage());
  };

  handleCamera = e => {
    this.setState({ camera: e.target.value }, this.fetchRoverImage());
  };

  handleSol = e => {
    this.setState({ sol: e.target.value }, this.fetchRoverImage());
  };

  fetchRoverImage = e => {
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;
    const API_KEY = "hyDqMegXSkTyGrRiTig8OId4IuijcF4WoTKGLZdK";

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    this.setState({ imagesURL: imageUrl });
    fetch(imageUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ images: data.photos });
        console.log(this.state.images);
      });
  };

  render() {
    let style = {
      formStyle: {
        textAlign: "center"
      },
      labelStyle: {
        margin: 5
      },
      selectStyle: {
        borderRadius: 4,
        backgroundColor: "black",
        color: "#3cbc8d"
      }
    };
    return (
      <div>
        <form style={style.formStyle}>
          <label style={style.labelStyle} htmlFor="rover">
            Rover
          </label>
          <select
            style={style.selectStyle}
            onChange={this.handleRover}
            id="rover"
            value={this.state.value}
          >
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>
          <label style={style.labelStyle} htmlFor="camera">
            Camera Type
          </label>
          <select
            style={style.selectStyle}
            onChange={this.handleCamera}
            id="rover"
            value={this.state.value}
          >
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label style={style.labelStyle} htmlFor="sol">
            Martian Sol: 1000-2000
          </label>
          <input
            style={style.selectStyle}
            type="number"
            onChange={this.handleSol}
            max="2000"
            min="1000"
            value={this.state.value}
            defaultValue="1000"
          />
        </form>
        <GetImageButton action={this.fetchRoverImage} />
        <ImageDisplay images={this.state.images} />
      </div>
    );
  }
}
