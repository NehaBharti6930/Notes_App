import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text centre mb-0">
        ©{new Date().getFullYear()}{" "}
        <a href="https://github.com/NehaBharti6930/Notes_App">Neha Bharti</a>
      </p>
    </footer>
  );
};

export default Footer;
