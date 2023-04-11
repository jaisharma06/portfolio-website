import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavbarItem.css";

class NavbarItem extends React.Component {
  render() {
    var data = this.props.download ? (
      <Fragment>
        <a
          className="navbarItem"
          href={this.props.href}
          attributes-list
          download={this.props.download}
        >
          {this.props.children}
        </a>
      </Fragment>
    ) : (
      <Fragment>
        <Link className="navbarItem" to={this.props.href}>
          {this.props.children}
        </Link>
      </Fragment>
    );
    return data;
  }
}

export default NavbarItem;
