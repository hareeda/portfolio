import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="timeline">

        {/* Project 1 - Playwright Banking Automation */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Playwright Banking Automation</h3>
            <p><strong>Technologies:</strong> Playwright, TypeScript, Page Object Model (POM), Jest, Allure Reports, GitHub, CI/CD</p>
            <p><strong>Role:</strong> Automation Engineer</p>
            <ul>
              <li>Designed and implemented an end-to-end <strong>Playwright automation framework</strong> for the <strong>ParaBank</strong> online banking application.</li>
              <li>Automated key user flows including <strong>registration, login, fund transfers, bill payments</strong>, and <strong>loan requests</strong>.</li>
              <li>Integrated test data management and <strong>Page Object Model (POM)</strong> for maintainability.</li>
            </ul>
            <p><strong>GitHub Repository:</strong> <a href="GitHub Link" target="_blank" rel="noopener noreferrer">GitHub Link</a></p>
          </div>
        </div>

        {/* Project 2 - Cypress Demoblaze Automation */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Cypress Demoblaze Automation</h3>
            <p><strong>Technologies:</strong> Cypress, JavaScript, Mocha, Chai, Allure Reports, GitHub Actions, CI/CD</p>
            <p><strong>Role:</strong> Automation Engineer</p>
            <ul>
              <li>Developed an automation suite for the <strong>Demoblaze e-commerce website</strong> using <strong>Cypress</strong>.</li>
              <li>Covered essential user scenarios like <strong>user authentication, product selection, checkout process</strong>, and <strong>order verification</strong> with <strong>Cypress tests</strong>.</li>
            </ul>
            <p><strong>GitHub Repository:</strong> <a href="GitHub Link" target="_blank" rel="noopener noreferrer">GitHub Link</a></p>
          </div>
        </div>

        {/* Project 3 - JSON API Automation Project */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>JSON API Automation Project</h3>
            <p><strong>Technologies:</strong> Postman, RestAssured, Java, JSON, Swagger, API Automation, Jenkins, CI/CD</p>
            <p><strong>Role:</strong> API Automation Engineer</p>
            <ul>
              <li>Automated <strong>REST API testing</strong> using <strong>JSONPlaceholder</strong>, a free online REST API for testing.</li>
              <li>Validated <strong>CRUD operations, response structures</strong>, and <strong>data integrity</strong> through comprehensive <strong>API test automation</strong>.</li>
            </ul>
            <p><strong>GitHub Repository:</strong> <a href="GitHub Link" target="_blank" rel="noopener noreferrer">GitHub Link</a></p>
          </div>
        </div>

        {/* Project 4 - Sleepwell BDD Automation (Selenium + Cucumber) */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Sleepwell BDD Automation (Selenium + Cucumber)</h3>
            <p><strong>Technologies:</strong> Selenium WebDriver, Java, Cucumber, TestNG, Jenkins, Gherkin, CI/CD</p>
            <p><strong>Role:</strong> BDD Automation Engineer</p>
            <ul>
              <li>Built a <strong>Behavior-Driven Development (BDD)</strong> framework for automating <strong>Sleepwell’s web application</strong> using <strong>Selenium with Cucumber</strong>.</li>
              <li>Defined <strong>Gherkin-based test scenarios</strong> to improve test clarity and coverage.</li>
            </ul>
            <p><strong>GitHub Repository:</strong> <a href="GitHub Link" target="_blank" rel="noopener noreferrer">GitHub Link</a></p>
          </div>
        </div>

        {/* Project 5 - Sleepwell Selenium Automation */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Sleepwell Selenium Automation</h3>
            <p><strong>Technologies:</strong> Selenium WebDriver, Java, TestNG, Maven, GitHub Actions, CI/CD</p>
            <p><strong>Role:</strong> Automation Engineer</p>
            <ul>
              <li>Developed a <strong>Selenium automation framework</strong> for the <strong>Sleepwell website</strong>, focusing on <strong>UI test automation</strong>.</li>
              <li>Implemented reusable test scripts for <strong>login, navigation</strong>, and key functional flows.</li>
            </ul>
            <p><strong>GitHub Repository:</strong> <a href="GitHub Link" target="_blank" rel="noopener noreferrer">GitHub Link</a></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
