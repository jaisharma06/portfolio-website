import React from "react";
import "./Portfolio.css";
import IntroText from "../../Components/IntroText/IntroText";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <IntroText subHeading={["I want to create beautiful things."]}>
          Portfolio
        </IntroText>
      </div>
    );
  }
}

export default Portfolio;
