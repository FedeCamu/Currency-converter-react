import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="credits">
        This project was coded by
        <a
          className="credits-ref"
          href="https://federica-c-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          F. Camuncoli
        </a>{" "}
        <br />
        Open-sourced on
        <a
          className="credits-ref"
          href="https://github.com/FedeCamu/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>
        and hosted on
        <a
          className="credits-ref"
          href="https://dictionary-app-pro.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify
        </a>
        <p>Image by rawpixel.com on Freepik</p>
      </footer>
    </div>
  );
}
