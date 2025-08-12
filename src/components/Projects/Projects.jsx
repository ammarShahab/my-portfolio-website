import React from "react";
import project_1 from "../../assets/images/project_1.jpg";
import projectImg1 from "../../assets/images/projectImg_1_trus_life.png";
import projectImg2 from "../../assets/images/projectImg_2_trip_nest.png";
import projectImg3 from "../../assets/images/projectImg_3_dish_diary.png";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Trust Life - Life Insurance Management Platform",
    image: projectImg1,
    links: "https://b11-a12-trust-life-client.web.app/",
    githubRepo:
      "https://github.com/ammarShahab/trust-Life-life-insurance-management-client",
    techUsed:
      "React, Tailwind CSS, Flowbite, Firebase, Node.js, MongoDB, Express.js",
    description:
      "Trust Life is a comprehensive life insurance management platform, built with modern web technologies. It empowers users to explore, compare, and purchase various insurance policies with secure transactions and seamless user experience. It is designed to offer a reliable, intuitive, and responsive insurance booking solution. It ensures transparency and ease for both customers and administrators through well-integrated features and a sleek UI.",
  },
  {
    id: 2,
    title: "Trip Nest - Travel Package Booking Platform",
    image: projectImg2,
    links: "https://a11-tripnest-client.web.app/",
    githubRepo: "https://github.com/ammarShahab/tour-package",
    techUsed: "React, Tailwind CSS, Firebase, Node.js, MongoDB, Express.js",
    description:
      "Trip Nest is a modern travel package booking platform built with the latest front-end technologies. It offers an interactive and smooth user experience for travelers to explore, view, and book travel packages with ease. The goal of Trip Nest is to provide a seamless travel booking experience where users can Browse curated travel packages, View package details with photos, itineraries, and pricing, Register or log in with Firebase authentication, Book travel packages, Manage personal bookings,Enjoy smooth navigation and animations",
  },
  {
    id: 3,
    title: "Dish Diary - Recipe Book App ",
    image: projectImg3,
    links: "https://b11a10-client-side-ashahab007.web.app/",
    githubRepo: "https://github.com/ammarShahab/recipe-book-client-dash",
    techUsed: "React, Tailwind CSS, Firebase, Node.js, MongoDB, Express.js",
    description:
      'Dish Diary is a user-friendly Recipe Book App where users can manage their own recipes, discover recipes shared by others, add favorites to a wishlist, and like recipes. The app features a dynamic "Top Recipes" section based on likes, offering an engaging experience for food lovers.',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-cover bg-center bg-no-repeat font-poppins"
      style={{ backgroundImage: `url(${project_1})` }}
    >
      <div data-aos="zoom-in" data-aos-duration="2000" className="py-16 px-6">
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
                // href={project.links}
                // target="_blank"
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
                    <h4 className="text-sm font-semibold">{project?.title}</h4>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.links}
                        target="_blank"
                        className="text-white hover:bg-[#F7BE38] bg-gray-800 transition-colors duration-300 font-medium rounded-sm text-sm p-2 mt-6"
                      >
                        View Site
                      </a>
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        className="text-white hover:bg-[#F7BE38] bg-gray-800 transition-colors duration-300 font-medium rounded-sm text-sm p-2 mt-6"
                      >
                        View Repo
                      </a>
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        className="text-white hover:bg-[#F7BE38] bg-gray-800 transition-colors duration-300 font-medium rounded-sm text-sm p-2 mt-6"
                      >
                        View More
                      </a>
                    </div>
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
