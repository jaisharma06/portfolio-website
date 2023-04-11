import React from "react";
import "./Footer.css";
import FooterItem from "./FooterItems/FooterItem";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <FooterItem
          icon={faInstagram}
          size="2x"
          href="https://www.instagram.com/js_jaisharma/"
        ></FooterItem>
        <FooterItem
          icon={faGithub}
          size="2x"
          href="https://github.com/jaisharma06"
        ></FooterItem>
        <FooterItem
          icon={faLinkedin}
          size="2x"
          href="https://www.linkedin.com/in/jaipsiborg/"
        ></FooterItem>
      </div>
    );
  }
}

export default Footer;
