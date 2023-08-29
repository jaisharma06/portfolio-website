import React from "react";
import './DropdownOption.css'

class DropdownOption extends React.Component {
    render() {
        return (
            <a href={this.props.href} className="option">{this.props.children}</a>
        );
  }
}

export default DropdownOption;