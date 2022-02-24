import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-parent">
        <div className="aboutMe-title">
          <div className="aboutMe-title1"> About Me</div>
          <div className="aboutMe-title2">My identity and my skills</div>
        </div>
        <div className="aboutMe-content">
          <div className="aboutMe-image"></div>
          <div className="aboutMe-text">
            <div className="aboutMe-introduction">
              <span className="aboutMe-introduction-text">
                Experienced and ambitious Java Developer that has a solid grasp
                on web services development and complex application development.
                Providing technical expertise in programming analysis,
                application analysis and design during different projects.
                Excellent team player with good knowledge of development tool
                and languages.
              </span>
            </div>
            <div className="aboutMe-highlights">
              <span>Here are a Few Highlights:</span>
              <div class="aboutMe-highlight-text">
                <div class="aboutMe-highlight-blob"></div>
                <span>Java Developer</span>
              </div>
              <div class="aboutMe-highlight-text">
                <div class="aboutMe-highlight-blob"></div>
                <span>Backend Developer</span>
              </div>
              <div class="aboutMe-highlight-text">
                <div class="aboutMe-highlight-blob"></div>
                <span>Functional Analyst</span>
              </div>
              <div class="aboutMe-highlight-text">
                <div class="aboutMe-highlight-blob"></div>
                <span>Building REST API</span>
              </div>
              <div class="aboutMe-highlight-text">
                <div class="aboutMe-highlight-blob"></div>
                <span>Managing database</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
