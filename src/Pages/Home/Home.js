import React, { Fragment } from "react";
import IntroText from "../../Components/IntroText/IntroText";
import "./Home.css";
import backgroundImg from "../../content/video_games_bg.png";
import Skills from "../../Components/Skills/Skills";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <img src={backgroundImg} className="homeBg" />
        <IntroText subHeading={["AR/VR and Games developer"]}>
          I ' M Jai Prakash
        </IntroText>
        <Skills />
      </div>
    );
  }
}

export default Home;
