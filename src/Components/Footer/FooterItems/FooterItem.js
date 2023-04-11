import React from "react";
import "./FooterItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FooterItem extends React.Component {
  render() {
    return (
      <a href={this.props.href} className="footerLink" target="_blank">
        <FontAwesomeIcon
          className="footerIcon"
          icon={this.props.icon}
          size={this.props.size}
        ></FontAwesomeIcon>
      </a>
    );
  }
}

export default FooterItem;
