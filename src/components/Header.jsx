import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Indian Health Adviser" className="h-12" />
          <h1 className="font-bold text-xl text-blue-900">
            INDIAN HEALTH <span className="text-blue-600">ADVISER</span>
          </h1>
        </div>

        {/* Navbar */}
        <nav>
          <ul className="flex space-x-8 text-blue-900 font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/treatments">Treatments</Link></li>
            <li><Link to="/hospitals">Top Hospitals</Link></li>
            <li><Link to="/doctors">Top Doctors</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;