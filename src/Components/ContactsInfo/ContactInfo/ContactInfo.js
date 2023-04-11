import React from "react";
import "./ContactInfo.css";
import { FaPhone, FaAt, FaFlag } from "react-icons/fa";

class ContactInfo extends React.Component {
  render() {
    var descriptionClass = this.props.details ? "contact-description" : "hide";
    var icons = {
      phone: <FaPhone className="contact-icon" />,
      email: <FaAt className="contact-icon" />,
      address: <FaFlag className="contact-icon" />,
    };
    return (
      <div className="contact-info-container">
        <div className="contact-info-content">
          {icons[this.props.icon]}
          <span className="contact-title">{this.props.contactTitle}</span>
        </div>
        <span className={descriptionClass}>{this.props.details}</span>
        <a className="contact-link" href={this.props.href}>
          {this.props.url}
        </a>
      </div>
    );
  }
}

export default ContactInfo;
