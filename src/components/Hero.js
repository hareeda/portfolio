import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../assets/profile.jpg"; // Replace with your image path
import './Hero.css';
import resumeFile from "../assets/Resume_Hareeda_MS.pdf";

function Hero() {
  return (
    <Container 
      className="hero-section d-flex align-items-center justify-content-center" 
      style={{ minHeight: "100vh" }}
    >
      <Row className="align-items-center">
        {/* Profile Image */}
        <Col md={5} className="text-center">
          <img 
            src={profilePic} 
            alt="Profile" 
            className="rounded-circle img-fluid" 
            style={{ maxWidth: "300px", border: "5px solid #ff85a2" }} 
          />
        </Col>

        {/* Text Content */}
        <Col md={7} className="text-start">
          <h1 className="fw-bold">Hareeda M S</h1>
          <h4 className="text-muted">QA Engineer | Automation Specialist | FinTech Enthusiast</h4>
          <p className="fs-5">
            Experienced in automation testing using Cypress, Playwright, and Selenium. Passionate about FinTech, CI/CD, API testing, and building robust test frameworks. Looking for global career opportunities.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="btn hire-me">Hire Me</a>
            <a href={resumeFile} className="btn resume" download>Resume</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
