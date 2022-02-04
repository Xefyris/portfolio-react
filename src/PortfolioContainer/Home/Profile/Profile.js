import React from "react";
import Typical from "react-typical";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/ngoclan-tran/">
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.facebook.com/minaris.ngoclan/">
                <i class="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/xefyris/">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCsniBqJ9ZyDwTgG2gkhwodQ">
                <i class="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-test">
              Hello, my name is{" "}
              <span className="highlighted-text"> Ngoc-Lan Tran</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-test">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🐦",
                    1000,
                    "Full Stack Developer 🧾",
                    1000,
                    "MERN Stack Dev ❤️",
                    1000,
                    "Cross platform Dev 👍",
                    1000,
                    "React/React Native Dev 😒",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a href="ehizcv.pdf" downlad="Ehiedu ehizcv.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
