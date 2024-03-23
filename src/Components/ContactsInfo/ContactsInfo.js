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
              url="+91 - 8447490922"
              href="tel:+918447490922"
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
              details="Flat Number - 703, Floor - 7, Tower - S3, Silverwood Regency Apartment, Hosa Road, Kasavanahalli, Bangalore, Karnataka - 560035"
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
