import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[radial-gradient(ellipse_at_top_left,_#f9f9f9,_#bcbab8,_#9d8f8f)] font-poppins"
    >
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="max-w-6xl mx-auto py-16 px-6"
      >
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="relative text-gray-700 text-4xl font-bold uppercase mb-12 text-center">
            Get In Touch
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[4px] w-50 bg-amber-300"></span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-[4px] w-46 bg-amber-400"></span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 h-[4px] w-42 bg-amber-500"></span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            "Have a web project in mind? Let’s collaborate to craft a tailored,
            high-impact digital solution. I’m excited to bring your ideas to
            life through clean code, creative design, and reliable execution.
            Together, we can build something extraordinary."
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-gray-600 mt-1 text-xl" />
              <div>
                <p className="text-sm text-gray-600">Mobile Number</p>
                <p className="text-lg font-medium text-gray-800">
                  +880 1762545131
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-gray-600 mt-1 text-xl" />
              <div>
                <p className="text-sm text-gray-600">Email Address</p>
                <p className="text-lg font-medium text-gray-800">
                  ashahab007@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-gray-600 mt-1 text-xl" />
              <div>
                <p className="text-sm text-gray-600">Permanent Address</p>
                <p className="text-lg font-medium text-gray-800">
                  Mirpur, Dhaka-1216, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            target="_blank"
            action="https://formsubmit.co/ashahab007@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-700 mb-5">
                Contact Me
              </h3>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-[#F7BE38] hover:bg-gray-800 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
