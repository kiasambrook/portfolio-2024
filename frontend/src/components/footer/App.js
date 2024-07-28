import React from "react";

const Footer = ({ className }) => {
  return (
    <div className="container mx-auto p-4 bg-fixed">
      <footer className="">
        <p>Copyright {new Date().getFullYear()} © Kia Sambrook</p>
      </footer>
    </div>
  );
};

export default Footer;
