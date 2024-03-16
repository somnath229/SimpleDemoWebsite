import React from "react";
import { Carousel } from "react-bootstrap";
import Feedback from "./Feedback";
import FormComponent from "./Form";

const HomePage = () => {
  return (
    <div>
      <section
        className="Introduction "
        style={{
          margin: "4rem 0",
          padding: "2rem 0",
          backgroundColor: "#f0f0f0",
          color: "#333",
        }}>
        <h2>Welcome to Mr. Arun's Journalist Course</h2>
        <p>Unlock the secrets of journalism from a seasoned professional.</p>
      </section>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ahc.leeds.ac.uk/images/resized/750x375-0-0-1-80-Who_Cares_about_Journalism__800_x_400px___JADU_.jpg"
            alt="First slide"
            style={{ objectFit: "cover", height: "40rem" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c8.alamy.com/comp/FRWY7F/mass-media-word-cloud-concept-with-journalism-news-related-tags-FRWY7F.jpg"
            alt="Second slide"
            style={{ objectFit: "cover", height: "40rem" }}
          />
        </Carousel.Item>
      </Carousel>
      <Feedback />
      <FormComponent/>
    </div>
  );
};

export default HomePage;
