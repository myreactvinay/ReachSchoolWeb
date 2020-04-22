import React from "react";
import "./App.css";
import Hero from "./Components/Hero.js";
import Cards from "./Components/Cards.js";
import data from "./data.json";

const HeroImages = data.HeroImagesOne;
const CardsData = data.Experiences;

function App() {
  return (
    <div className="App">
      <Hero HImages={HeroImages} />
      <Cards CardsDataContent={CardsData} />
    </div>
  );
}

export default App;
