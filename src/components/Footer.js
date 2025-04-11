import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text centre mb-0">
        ©{new Date().getFullYear()}{" "}
        <a href="https://github.com/NehaBharti6930/React_Notes">Neha Bharti</a>
      </p>
    </footer>
  );
};

export default Footer;
