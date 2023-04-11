import React from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import "./NavbarItems.css";
import Resume from "../../../content/Jai_Prakash_Resume.pdf";

class NavbarItems extends React.Component {
  render() {
    return (
      <div className="navbarItems">
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href={Resume} download="Jai_Prakash_Resume">
          Download Resume
        </NavbarItem>
        <NavbarItem href="Portfolio">Portfolio</NavbarItem>
        <NavbarItem href="Contact">Contact</NavbarItem>
      </div>
    );
  }
}

export default NavbarItems;
