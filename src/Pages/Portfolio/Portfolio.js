import React from "react";
import "./Portfolio.css";
import IntroText from "../../Components/IntroText/IntroText";
import backgroundImg from "../../content/boy_playing.webp";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <img src={backgroundImg} className="contacts-bg" />
        <IntroText
          subHeading={[
            "I want to create beautiful things.",
            "If you can program it, you can build it. If you can build it, you can make it do something worthwhile",
          ]}
        >
          Portfolio
        </IntroText>
      </div>
    );
  }
}

export default Portfolio;
