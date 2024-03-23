import React from "react";
import "./Portfolio.css";
import IntroText from "../../Components/IntroText/IntroText";
import backgroundImg from "../../content/boy_playing.webp";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <img src={backgroundImg} className="contacts-bg" />
        <IntroText subHeading={["I want to create beautiful things."]}>
          Portfolio
        </IntroText>
      </div>
    );
  }
}

export default Portfolio;
