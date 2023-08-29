import React from "react";
import './DropdownMenu.css'
import DropdownOption from "./DropdownOption/DropdownOption";
import Resume from "../../content/Jai_Prakash_Resume.pdf";

class DropdownMenu extends React.Component {
    
    menuClasses = ""
    render() {
        if (!this.props.isOpen)
        {
            this.menuClasses = "dropdownMenu, hidden"    
        } else {
            this.menuClasses = "dropdownMenu , visible"
        }
        return (
            <div className={this.menuClasses}>
               <DropdownOption href="/">Home</DropdownOption>
               <DropdownOption href={Resume}>Download Resume</DropdownOption>
               <DropdownOption href="Portfolio">Portfolio</DropdownOption>
               <DropdownOption href="Contact">Contact</DropdownOption>
            </div>
        );
  }
}

export default DropdownMenu;