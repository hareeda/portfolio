import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="section-title">💼 Work Experience</h2>
      
      <div className="timeline">
        {/* UST Experience */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>UST, TVM, Kerala</h3>
            <p><strong>Tester-I Software Testing</strong></p>
            <p>March 2024 – Present</p>
            <ul>
              <li><strong>Product Expertise:</strong> Contributed to testing products for the US healthcare system, focusing on healthcare resource planning and health insurance enrollment.</li>
              <li><strong>Framework Development:</strong> Assisted in designing and implementing test frameworks for validating healthcare data, increasing test coverage, and reducing manual testing efforts.</li>
              <li><strong>CI/CD Integration:</strong> Utilized Jenkins and version control tools to automate testing, ensuring seamless integration with the development pipeline.</li>
              <li><strong>Data Parsing Frameworks:</strong> Designed an Excel data parsing framework, automating extraction and transformation, reducing manual effort by 95%.</li>
              <li><strong>PDF Parsing Tool Development:</strong> Implemented Tesseract OCR-based AI/ML techniques for extracting data from health plan PDFs, automating structured Excel generation, and reducing manual effort by 80%.</li>
              <li><strong>Defect Tracking & Reporting:</strong> Used JIRA for defect tracking, reporting test results, and collaborating with developers for issue resolution.</li>
              <li><strong>Test Case Development:</strong> Created and maintained comprehensive test cases to ensure full coverage of project requirements.</li>
            </ul>
            <h4>Key Achievements:</h4>
            <ul>
              <li>✅ Built an <strong>automated DTRR tool</strong>, reducing manual effort by <strong>90%</strong> for enrollment test cases.</li>
              <li>✅ <strong>Reduced manual data extraction by 95%</strong> through automated parsing frameworks.</li>
              <li>✅ <strong>Enhanced testing efficiency by 80%</strong> by automating PDF extraction using AI/ML techniques.</li>
            </ul>
          </div>
        </div>

        {/* Inmakes Infotech Experience */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>INMAKES INFOTECH, Kochi, Kerala</h3>
            <p><strong>Junior Python Full Stack Intern</strong></p>
            <p>December 2023 – March 2024</p>
            <ul>
              <li>Participated in <strong>Python training</strong>, covering Pandas, Django, Flask, Machine Learning, CSS, and HTML.</li>
              <li>Developed and implemented <strong>multiple projects</strong> using Python frameworks:</li>
              <ul>
                <li>🛠 <strong>Apollo University:</strong> Built a <strong>student portal (Django)</strong> with user authentication and course navigation.</li>
                <li>🛒 <strong>Muforl E-commerce Website:</strong> Developed a <strong>responsive e-commerce site (Flask)</strong> with secure transactions.</li>
              </ul>
            </ul>
            <h4>Key Achievement:</h4>
            <ul>
              <li>✅ <strong>Delivered 2 end-to-end web applications</strong> using Python frameworks.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
