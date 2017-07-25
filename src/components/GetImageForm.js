import React, { Component } from "react";
import GetImageButton from "./GetImageButton";
import ImageDisplay from "./ImageDisplay";

const API_KEY = "hyDqMegXSkTyGrRiTig8OId4IuijcF4WoTKGLZdK";

export default class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "1000"
    };
  }

  handleRover = e => {
    console.log(e.target.value);
    this.setState({ rover: e.target.value });
  };

  handleCamera = e => {
    console.log(e.target.value);
    this.setState({ camera: e.target.value });
  };

  handleSol = e => {
    console.log(e.target.value);
    this.setState({ sol: e.target.value });
  };

  fetchRoverImage = e => {
    console.log("fired");
    e.preventDefault();

    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;
    const API_KEY = "hyDqMegXSkTyGrRiTig8OId4IuijcF4WoTKGLZdK";

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    console.log(imageUrl);
    fetch(imageUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("line 50", data.photos);
        this.setState({ images: data.photos });
      });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="rover">Rover</label>
          <select
            onChange={this.handleRover}
            id="rover"
            value={this.state.value}
          >
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select
            onChange={this.handleCamera}
            id="rover"
            value={this.state.value}
          >
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input
            type="number"
            onChange={this.handleSol}
            max="2000"
            min="1000"
            value={this.state.value}
          />
        </form>
        <GetImageButton action={this.fetchRoverImage} />
        <ImageDisplay images={this.state.images} />
      </div>
    );
  }
}
