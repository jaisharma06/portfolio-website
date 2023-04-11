import React from "react";
import "./IntroText.css"

class IntroText extends React.Component{
    render() {
        return (
            <div className="intro">
                <span className="glitch" data-text={this.props.children}>
                    {this.props.children}
                </span>
                <span className="introSubHeading">
                    {this.props.subHeading}
                </span>
            </div>
        );
    }
}

export default IntroText;