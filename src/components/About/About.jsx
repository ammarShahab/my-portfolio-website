import React from "react";
import portfolioImg from "../../assets/images/portfolio.png"; // Replace with your actual image
import backgroundImg from "../../assets/images/about_bg.jpg"; // Background image
import { li } from "framer-motion/m";

const About = () => {
  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/AmmarShahab_Resume.pdf";
    link.download = "AmmarShahab_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat font-poppins"
      // data-aos="fade-up"
      // data-aos-duration="1000"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10 ">
        {/* Left: Portfolio Image */}
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <img
            src={portfolioImg}
            alt="Portfolio"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right: About Content */}
        <div data-aos="fade-left" className="w-full md:w-1/2 text-black">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 uppercase text-gray-700">
            About Me
          </h2>
          <p className="text-base leading-relaxed text-gray-600 mb-6">
            Hi! I’m a junior MERN Stack developer with a strong foundation in
            full-stack web development. I recently completed a 6-month immersive
            bootcamp where I mastered technologies like HTML, CSS, Tailwind CSS,
            JavaScript, React, Node.js, Express.js, MongoDB, Firebase, and
            Vercel.
            <br />
            <br />
            During the bootcamp, I built and deployed 3 full-stack projects that
            reflect my ability to design responsive UIs, build efficient APIs,
            manage databases, and handle authentication systems. I also utilize
            prompt engineering to integrate AI into my workflows—enhancing user
            interaction and development efficiency. I enjoy turning ideas into
            functional, user-centric digital experiences. From creating sleek
            frontends with React to managing data and logic on the backend with
            Node and Express, I strive for clean, optimized code and scalable
            architecture. My workflow includes version control with Git,
            deployment with Vercel, and continuous learning of new tools and
            trends. I value teamwork, adaptability, and clear communication, and
            I’m always eager to learn and grow.
            <br />
            <br />
            I’m currently seeking opportunities to contribute to meaningful
            projects, collaborate with forward-thinking teams, and sharpen my
            skills further. Let’s connect and build something impactful
            together!
          </p>

          {/* View Resume Button */}
          {/* <a
            href="/resume.pdf" // Replace with your actual resume link
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <button
            onClick={handleDownloadCv}
            className="text-white bg-[#F7BE38] hover:bg-gray-800 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 "
          >
            Download Resume
          </button>
          {/* </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
