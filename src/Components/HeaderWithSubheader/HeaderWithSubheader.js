import React from "react";
import "./HeaderWithSubheader.css";

class HeaderWithSubheader extends React.Component {
  render() {
    return (
      <div className="headerWithSubheader">
        <span className="header">{this.props.children}</span>
        <span className="sub-header">{this.props.subHeading}</span>
      </div>
    );
  }
}

export default HeaderWithSubheader;
