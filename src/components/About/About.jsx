import React from "react";
import portfolioImg from "../../assets/images/portfolio.png"; // Replace with your actual image
import backgroundImg from "../../assets/images/about_bg.jpg"; // Background image

const About = () => {
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
            Hello! I'm a passionate web developer with a love for turning ideas
            into interactive digital experiences. Over the years, I’ve
            cultivated skills in front-end and back-end development, combining
            design sensibility with clean code to build user-friendly web
            applications. I enjoy exploring new technologies and continuously
            improving my craft.
            <br />
            <br />
            From crafting responsive layouts with Tailwind CSS to building
            scalable APIs using Node.js and Express, I strive to deliver
            performance-optimized and accessible websites. Whether I'm working
            solo or collaborating with a team, I approach each project with
            curiosity, attention to detail, and a drive to exceed expectations.
            <br />
            <br />
            Beyond coding, I value communication, adaptability, and a growth
            mindset. I'm always on the lookout for exciting opportunities to
            contribute to meaningful projects, solve real-world problems, and
            grow as a developer.
            <br />
            <br />
            Let's connect and build something awesome together!
          </p>

          {/* View Resume Button */}
          <a
            href="/resume.pdf" // Replace with your actual resume link
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-white bg-[#F7BE38] hover:bg-gray-800 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 ">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
