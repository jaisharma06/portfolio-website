import React, { Fragment } from "react";
import './Border.css'

class Border extends React.Component{
    render() {
        return (
            <Fragment>
                <div className="leftBorder"></div>
                <div className="rightBorder"></div>
                <div className="bottomBorder"></div>
                <div className="topBorder"></div>
            </Fragment>
        );
    }
}

export default Border;