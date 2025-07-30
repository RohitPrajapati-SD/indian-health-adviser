import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Leading Healthcare Services in India
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              We connect you with top hospitals and doctors for world-class treatment and care.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md">
              Book a Consultation →
            </button>
          </div>
          {/* Doctor Image */}
          <div className="md:w-1/2 flex justify-center">
            <img src="/doctor.png" alt="Doctor" className="max-h-96 drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg bg-blue-50 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Medical Tourism</h3>
              <p className="text-gray-600">
                End-to-end support for international patients seeking treatment in India.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-blue-50 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">24/7 Assistance</h3>
              <p className="text-gray-600">
                Our team is available around the clock to support you during your treatment journey.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-blue-50 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Top Hospitals</h3>
              <p className="text-gray-600">
                We partner with India’s leading hospitals offering advanced healthcare services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hospitals */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Top Hospitals
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <img src="/hospital1.jpg" alt="Hospital" className="rounded mb-4" />
              <h3 className="text-lg font-semibold text-blue-700">Apollo Hospitals</h3>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <img src="/hospital2.jpg" alt="Hospital" className="rounded mb-4" />
              <h3 className="text-lg font-semibold text-blue-700">Fortis Healthcare</h3>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <img src="/hospital3.jpg" alt="Hospital" className="rounded mb-4" />
              <h3 className="text-lg font-semibold text-blue-700">Max Healthcare</h3>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <img src="/hospital4.jpg" alt="Hospital" className="rounded mb-4" />
              <h3 className="text-lg font-semibold text-blue-700">Medanta</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
        <p className="mb-6">
          Contact us today and let our experts guide you towards the best treatment options in India.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
          Contact Us →
        </button>
      </section>
    </div>
  );
};

export default Home;
