import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>MAR BASELIOS COLLEGE OF ENGINEERING AND TECHNOLOGY</h3>
            <p><strong>Bachelor of Technology (Computer Science)</strong></p>
            <p>Jul 2019 – May 2023 | GPA: 7.82/10.0</p>
            <p>Relevant Coursework: Data Structures, Software Engineering, AI</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>CHRIST NAGAR SENIOR SECONDARY SCHOOL</h3>
            <p><strong>Senior Secondary (Bio-Maths)</strong></p>
            <p>May 2018 - Mar 2019 | Percentage: 90.6%</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>SARVODAYA VIDYALAYA</h3>
            <p><strong>High School</strong></p>
            <p>May 2016 - Apr 2017 | Percentage: 91.67%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
