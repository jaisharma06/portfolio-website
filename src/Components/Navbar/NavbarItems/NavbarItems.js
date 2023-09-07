import React, { Fragment, useState} from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import "./NavbarItems.css";
import Resume from "../../../content/Jai_Prakash_Resume.pdf";
import Hamburger from 'hamburger-react'
import DropdownMenu from "../../DropdownMenu/DropdownMenu";

class NavbarItems extends React.Component {

  constructor(props) {
    super(props)
     this.state = {
      isOpen: false,
    };
  }

  setOpen = () =>
  {
    let _isOpen = this.state.isOpen
    this.setState({
      isOpen : !_isOpen
    })
  }

  render() {
    return (
      <Fragment>
        <Hamburger toggled={this.state.isOpen} 
          toggle = {this.setOpen}
        >
        </Hamburger>
        <DropdownMenu isOpen={this.state.isOpen} />

        <div className="navbarItems">
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href={Resume} download="Jai_Prakash_Resume">
              Download Resume
            </NavbarItem>
            <NavbarItem href="Portfolio">Portfolio</NavbarItem>
            <NavbarItem href="Contact">Contact</NavbarItem>
          </div>
        
      </Fragment>
    );
  }
}

export default NavbarItems;
