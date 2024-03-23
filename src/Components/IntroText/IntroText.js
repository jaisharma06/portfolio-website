import React from "react";
import "./IntroText.css";
import { Typewriter } from "react-simple-typewriter";

class IntroText extends React.Component {
  render() {
    return (
      <div className="intro">
        <span className="glitch" data-text={this.props.children}>
          {this.props.children}
        </span>
        <span className="introSubHeading">
          <Typewriter
            words={this.props.subHeading}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    );
  }
}

export default IntroText;
