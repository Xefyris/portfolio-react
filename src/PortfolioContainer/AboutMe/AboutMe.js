import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-parent">
        <div className="aboutMe-title">
          <div className="aboutMe-title1"> About Me</div> <br />
          <div className="aboutMe-title2">Why chose me?</div>
          <div className="aboutMe-separator-blob">
            <div></div>
          </div>
        </div>
        <div className="aboutMe-content">
          <div className="aboutMe-image"></div>
          <div className="aboutMe-text">
            <div className="aboutMe-introduction">
              <span className="aboutMe-introduction-text">
                Full stack web and mobile developer with background knowledge of
                MERN stacks with redux, along with a knack of building
                applications with utmost efficiency. Strong professional with a
                BSC willing to be an asset for an organization.
              </span>
            </div>

            <div className="aboutMe-highlights">
              <span className="aboutMe-highlights-text">
                <span>Here are a Few Highlights:</span>

                <ul>
                  <li>test</li>
                  <li>test1</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
