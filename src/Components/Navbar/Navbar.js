import React from "react";
import "./Navbar.css";
import NavbarItems from "./NavbarItems/NavbarItems";
import NavbarTitle from "./NavbarTitle/NavbarTitle";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <NavbarTitle>Jai Prakash</NavbarTitle>
        <NavbarItems />
      </div>
    );
  }
}

export default Navbar;
