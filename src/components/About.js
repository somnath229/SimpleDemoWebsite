import React from 'react';
import FormComponent from "./Form";

const About = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">About Journalism</h2>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div
          className="mr-md-4 mb-4 mb-md-0"
          style={{ flex: "1", textAlign: "left" }}>
          <p>
            Journalism plays a crucial role in society by providing information,
            analysis, and commentary on events and issues. Journalists are
            responsible for gathering and presenting news in an accurate and
            unbiased manner, serving as a watchdog for the public interest.
          </p>
          <p>
            Journalists often investigate and report on a wide range of topics,
            including politics, economics, social issues, and culture. They may
            work for newspapers, magazines, television, radio, or online media
            outlets, and may specialize in areas such as investigative
            journalism, sports reporting, or foreign correspondence.
          </p>
        </div>
        <div style={{ flex: "1", maxWidth: "400px" }}>
          <img
            src="https://media.istockphoto.com/id/1320644939/vector/vector-illustration-newspaper-and-reader.jpg?s=612x612&w=0&k=20&c=xd9Zlf0lAJVNImBwm0fZ-a-TmFQgAyYtlSirOFJ2Vik="
            alt="Journalism"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <FormComponent/>
    </div>
  );
};

export default About;
