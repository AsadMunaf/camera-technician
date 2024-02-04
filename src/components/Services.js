// Services.js
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Services = () => {
  return (
    <Container>
      <h2>Our Services</h2>
      <ListGroup>
        <ListGroup.Item>Camera Repair</ListGroup.Item>
        <ListGroup.Item>Sensor Cleaning</ListGroup.Item>
        <ListGroup.Item>Lens Calibration</ListGroup.Item>
        {/* Add more services */}
      </ListGroup>
    </Container>
  );
};

export default Services;
