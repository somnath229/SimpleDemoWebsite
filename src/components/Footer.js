import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#343a40",
    color: "#fff",
    padding: "20px",
  };

  const contactStyle = {
    marginRight: "20px",
  };

  const mapStyle = {
    width: "100%",
    height: "200px",
    border: 0,
  };

  return (
    <footer style={footerStyle}>
      <Container className="d-flex justify-content-between align-items-center">
        <div
          className="d-flex flex-column justify-content-start"
          style={contactStyle}>
          <div>
            <h5>Contact Us</h5>
            <p className="m-0">123 Street Name, City, Country</p>
            <p className="m-0">Email: info@example.com</p>
            <p className="m-0">Phone: +123-456-7890</p>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center">
          <iframe
            title="Mumbai Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.963192000643!2d72.82584811489014!3d19.082181357070482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63059fe0e2f%3A0x5ccce5a8e99abc8c!2sGateway%20of%20India!5e0!3m2!1sen!2sin!4v1630106476617!5m2!1sen!2sin"
            style={mapStyle}
            allowFullScreen=""
            loading="lazy"></iframe>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
