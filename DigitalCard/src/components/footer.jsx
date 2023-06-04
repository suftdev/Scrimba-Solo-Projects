import React from "react";
import twitter from "../assets/Twitter-icon.svg";
import facebook from "../assets/Facebook-icon.svg";
import instagram from "../assets/Instagram-icon.svg";
import github from "../assets/Github-icon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <img src={twitter} alt="Twitter Icon" />
        <img src={facebook} alt="Facebook Icon" />
        <img src={instagram} alt="Instagram Icon" />
        <img src={github} alt="Github Icon" />
      </footer>
    </div>
  );
}
