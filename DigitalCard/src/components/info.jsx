import React from "react";
import Icon from "../assets/icon.svg";
import linkedin from "../assets/Vector.svg";

export default function Info() {
  return (
    <div className="info-section">
      <h1>Laura Smith</h1>
      <h4>Frontend Developer</h4>
      <p>laurasmith.website</p>
      <div className="icons">
        <button className="emailbutton">
          <img src={Icon} alt="Email Icon" />
          Email
        </button>
        <button className="linkedinbutton">
          <img src={linkedin} alt="Linkedin Icon" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
