import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h1>
      <form className="space-y-4 max-w-lg">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32"></textarea>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
