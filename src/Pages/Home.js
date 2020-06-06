import React, { Component } from "react";
import Hero from "../Components/Hero.js";
import Cards from "../Components/Cards.js";
import data from "../data.json";

const HeroImages = data.HeroImagesOne;
const CardsData = data.Experiences;

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero HImages={HeroImages} />
        <Cards CardsDataContent={CardsData} />
      </React.Fragment>
    );
  }
}

export default Home;
