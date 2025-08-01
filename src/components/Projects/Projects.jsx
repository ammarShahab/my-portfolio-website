import React from "react";
import project_1 from "../../assets/images/project_1.jpg";
import project_2 from "../../assets/images/project_2.jpg";
import project_3 from "../../assets/images/project_3.jpg";
import projectImg1 from "../../assets/images/projectImg_1_trus_life.png";
import projectImg2 from "../../assets/images/projectImg_2_trip_nest.png";
import projectImg3 from "../../assets/images/projectImg_3_dish_diary.png";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Trust Life - life Insurance Management Platform",
    image: projectImg1,
    links: "https://b11-a12-trust-life-client.web.app/",
  },
  {
    title: "Trip Nest - Travel Package Booking Platform",
    image: projectImg2,
    links: "https://a11-tripnest-client.web.app/",
  },
  {
    title: "Dish Diary - Recipe Book App ",
    image: projectImg3,
    links: "https://b11a10-client-side-ashahab007.web.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${project_1})` }}
    >
      <div data-aos="zoom-in" data-aos-duration="1000" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h3 className="relative text-4xl font-bold mb-12 uppercase text-center text-gray-700">
            Projects
            {/* Underline Layers */}
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[4px] w-40 bg-amber-300"></span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-[4px] w-36 bg-amber-400"></span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 h-[4px] w-32 bg-amber-500"></span>
          </h3>

          {/* Subtitle */}
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover how I blend design and development to build engaging,
            functional websites. These projects showcase my experience,
            dedication, and enthusiasm for turning ideas into digital reality.
          </p>

          {/* Project Cards */}
          <div className="grid grid-cols-1 h-full sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <a
                href={project.links}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <motion.div
                  className="backdrop-blur-md min-h-full bg-white/10 border border-white/30 rounded-xl overflow-hidden shadow-lg group-hover:shadow-[rgba(255,255,255,0.2)_-20px_0px_30px_0px] transition-shadow duration-300"
                  initial={{ rotateX: 0, rotateZ: 0, translateY: 0 }}
                  whileHover={{
                    rotateX: -5, // Top + bottom tilt (forward)
                    rotateZ: -3, // Twist to the left
                    translateY: -5, // Lift the left edge
                    transition: { duration: 0.1, ease: "easeInOut" },
                  }}
                  style={{ transformOrigin: "left center" }}
                >
                  <img
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-48 object-cover rounded-xl p-2"
                  />
                  <div className="p-4 text-gray-700 text-center">
                    <h4 className="text-xl font-semibold">{project?.title}</h4>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
