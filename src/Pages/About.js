import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import data from "../data.json";
import Imagecap from "../Components/Imagecap";

const jumbotron = data.About;
const Imagecapdt = data.ImageCap;

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron Jumbotorndata={jumbotron} />
        <Imagecap Imagecapdata={Imagecapdt} />
      </React.Fragment>
    );
  }
}

export default About;
