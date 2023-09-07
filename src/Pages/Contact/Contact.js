import React, { useState } from "react";
import ContactsInfo from "../../Components/ContactsInfo/ContactsInfo";
import HeaderWithSubheader from "../../Components/HeaderWithSubheader/HeaderWithSubheader";
import backgroundImg from "../../content/contact_bg.png";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "This is a sample error.",
      errorMessageClasses: "error-message-contacts hide",
    };
  }

  componentDidMount() {
    this.em.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.em.scrollIntoView({ behavior: "smooth" });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessageClasses: "error-message-contacts",
    });
  };

  render() {
    return (
      <div className="contact">
        <img src={backgroundImg} className="contacts-bg" />
        <div className="contact-content">
          <HeaderWithSubheader subHeading="I ' m available for freelance hire">
            Contacts
          </HeaderWithSubheader>
          <div className="contacts-info-div">
            <ContactsInfo title="contacts info" hireMeTitle="Hire Me" />

            {/*form for contact */}
            <form
              method="get"
              action=""
              className="contact-form"
              id="contact-form-id"
            >
              <input
                type="text"
                id="input_name"
                name="Name"
                placeholder="Name"
                className="contact-input"
              />

              <input
                type="text"
                id="input_email"
                name="Email"
                placeholder="Email"
                className="contact-input"
              />
              <textarea
                id="input_message"
                name="Message"
                placeholder="Message"
                className="contact-input"
              />

              <button
                type="submit"
                form="contact-form-id"
                value="Send Message"
                className="form-button"
                onClick={this.onSubmit}
              >
                Send Message
              </button>
              <label
                className={this.state.errorMessageClasses}
                ref={(em) => {
                  this.em = em;
                }}
              >
                {this.state.error}
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
