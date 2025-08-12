import React from "react";
import portfolioImg from "../../assets/images/portfolio.png"; // Replace with your actual image
import backgroundImg from "../../assets/images/about_bg.jpg"; // Background image
import { li } from "framer-motion/m";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-cover bg-center bg-no-repeat font-poppins"
      // data-aos="fade-up"
      // data-aos-duration="1000"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10 ">
        {/* Left: Portfolio Image */}
        <div data-aos="fade-up-right" className="w-full md:w-1/2">
          <img
            src={portfolioImg}
            alt="Portfolio"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right: About Content */}
        <div data-aos="fade-up-right" className="w-full md:w-1/2 text-black">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 uppercase text-gray-700">
            About Me
          </h2>
          <p className="sm:text-[11px] lg:text-base leading-relaxed text-gray-600 mb-6">
            I’m a passionate frontend developer with a strong foundation in
            modern web technologies, gained through an intensive six-month
            bootcamp. Along my journey, I mastered HTML, CSS, Tailwind,
            JavaScript, and React for building responsive, engaging user
            interfaces, while also expanding my skills into backend development
            with Node.js, Express.js, MongoDB, Firebase, and JWT authentication.
            I’ve applied these tools in real-world projects, each one deepening
            my love for creating intuitive, functional, and visually appealing
            applications.
            <br />
            <br />I enjoy transforming ideas into seamless digital
            experiences—designing clean, adaptive UIs, ensuring performance
            optimization, and integrating innovative solutions. I thrive in
            collaborative environments where creativity meets problem-solving,
            and I take pride in writing maintainable, scalable code that
            enhances user satisfaction.
            <br />
            <br />
            Beyond programming, I keep my curiosity alive by exploring creative
            outlets, engaging in sports, and staying up-to-date with emerging
            tech trends. Whether I’m refining a feature, sketching a new layout,
            or learning a new skill, I approach every challenge with energy,
            creativity, and a drive for growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
