import React, { Fragment } from 'react'
import './NavbarTitle.css'

class NavbarTitle extends React.Component{
    render() {
        return (
            <Fragment>
                <h2 className="heading">{this.props.children}</h2>
            </Fragment>
        );
    }
}

export default NavbarTitle;