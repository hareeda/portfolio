import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="timeline">
        {/* Project 1 - DTRR Automation Tool */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Automated DTRR Tool</h3>
            <p><strong>Technologies:</strong> Python, Selenium, Tesseract OCR, Pandas</p>
            <p><strong>Role:</strong> Developer & Automation Tester</p>
            <ul>
              <li>Built a tool that automated **Delta Test Result Report (DTRR)** for healthcare enrollment cases.</li>
              <li>Used **Tesseract OCR** for text extraction from PDFs.</li>
              <li>Reduced manual effort by **90%**, improving test accuracy and efficiency.</li>
            </ul>
          </div>
        </div>

        {/* Project 2 - Health Plan Data Parsing */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Health Plan Data Parsing</h3>
            <p><strong>Technologies:</strong> Python, Pandas, Excel Automation, AI/ML</p>
            <p><strong>Role:</strong> Data Engineer & Tester</p>
            <ul>
              <li>Developed a **data parsing framework** to automate health plan data extraction from Excel files.</li>
              <li>Used **AI-based column mapping** for structured data conversion.</li>
              <li>Reduced manual data extraction by **95%**, improving accuracy.</li>
            </ul>
          </div>
        </div>

        {/* Project 3 - E-commerce Test Automation */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>E-commerce Test Automation</h3>
            <p><strong>Technologies:</strong> Cypress, TypeScript, Playwright, GitHub Actions</p>
            <p><strong>Role:</strong> QA Automation Engineer</p>
            <ul>
              <li>Designed an **end-to-end test automation framework** for an e-commerce platform.</li>
              <li>Automated key user flows (**Login, Product Search, Checkout**) using **Cypress & Playwright**.</li>
              <li>Integrated with **GitHub Actions** for CI/CD pipeline testing.</li>
            </ul>
          </div>
        </div>

        {/* Project 4 - Smart Surveillance System */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Smart Surveillance System</h3>
            <p><strong>Technologies:</strong> Python, OpenCV, Machine Learning</p>
            <p><strong>Role:</strong> AI Engineer & Developer</p>
            <ul>
              <li>Developed a **real-time surveillance system** using **computer vision & ML**.</li>
              <li>Implemented **object detection** to track movements in restricted areas.</li>
              <li>Enhanced security automation by **80%**, reducing human intervention.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
