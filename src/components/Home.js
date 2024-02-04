// Home.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//import cameraImage from '../assets/camera.jpg'; // Import your camera image

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <h1>Welcome to Camera Technician</h1>
          <p>Your trusted partner for camera repair and maintenance.</p>
        </Col>
        <Col md={6}>
        {/* <img src={cameraImage} alt="Camera" className="img-fluid" /> */}
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Our Services</h2>
          <ul>
            <li>Camera Repair</li>
            <li>Sensor Cleaning</li>
            <li>Lens Calibration</li>
            {/* Add more services */}
          </ul>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Get Your Camera Fixed Today!</Card.Title>
              <Card.Text>
                We provide professional camera repair services. Contact us now to get your camera back in top condition.
              </Card.Text>
              <Button variant="primary" href="/contact">Contact Us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
