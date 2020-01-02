import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";




export default function Navbar() {
  return (
    <Container>
      <Row>
        <Col><Link to="/">Home</Link></Col>
        <Col><Link to="/about">About</Link></Col>
        <Col><Link to="/contact">Contact</Link></Col>
      </Row>
    </Container>

  )
}