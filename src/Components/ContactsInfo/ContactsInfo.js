import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import "./ContactsInfo.css";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

class ContactsInfo extends React.Component {
  render() {
    return (
      <div className="contacts-info">
        <div className="contact-info-panel">
          <span className="contacts-title">{this.props.title}</span>
          <div className="contact-details">
            <ContactInfo
              icon="phone"
              size="2x"
              contactTitle="Phone"
              details="+91 - 8447490922"
            ></ContactInfo>

            <ContactInfo
              icon="email"
              size="2x"
              contactTitle="Email"
              url="jai.sharma06@live.com"
              href="mailto: jai.sharma06@live.com"
            ></ContactInfo>

            <ContactInfo
              icon="address"
              size="2x"
              contactTitle="Address"
              details="Flat Number - D2, Floor - 2, Kristal Galena Apartment, Bellandur Main Road, Bellandur, Bangalore, Karnataka - 560103"
            ></ContactInfo>
          </div>
        </div>

        <div className="contact-info-panel">
          <span className="contacts-title">{this.props.hireMeTitle}</span>
        </div>
      </div>
    );
  }
}

export default ContactsInfo;
