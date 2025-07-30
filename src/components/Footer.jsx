import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Indian Health Adviser. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;