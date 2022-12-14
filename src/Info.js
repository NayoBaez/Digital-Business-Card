import React from "react";
import ProfilePic from "./profile-naomi.png";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import "./Info.css";

export default function Info() {
  return (
    <div className="Info">
      <img src={ProfilePic} alt="Profile" />
      <h1>Naomi Bàez</h1>
      <h2>Frontend Developer</h2>
      <h3>nayobaez.com</h3>
      <div className="buttons">
        <a href="mailto:info@nayobaez.com" target="_blank" rel="noreferrer">
          <button className="email--button">
            <i className="fa-solid fa-envelope"></i> Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/nayobaezfeliz/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="linkedin--button">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </button>
        </a>
      </div>
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
