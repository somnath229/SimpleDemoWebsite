import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import { feedbackData } from "../data/FeedbackData";

const Feedback = () => {
  return (
    <section className="Feedback w-100 p-5">
      <h2 className="text-center mb-4 p-5">Student Feedback</h2>
      <Container
        className="d-flex justify-content-center align-items-center p-3"
        >
        
        <Carousel className="">
          {feedbackData.map((feedback) => (
            <Carousel.Item key={feedback.id}>
              <Card className="feedback-card p-5">
                <Card.Body>
                  <Card.Text>{feedback.comment}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Subtitle className="mb-2 text-muted">
                    {feedback.name}
                  </Card.Subtitle>
                </Card.Footer>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Feedback;
