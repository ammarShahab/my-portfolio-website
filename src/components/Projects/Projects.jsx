import React from "react";
import project_1 from "../../assets/images/project_1.jpg";
import project_2 from "../../assets/images/project_2.jpg";
import project_3 from "../../assets/images/project_3.jpg";
import projectImg1 from "../../assets/images/projectImg1.png";

const projectData = [
  {
    title: "Trust Life -life insurance management platform",
    image: projectImg1,
  },
  {
    title: "Portfolio Showcase",
    // image: project_2,
  },
  {
    title: "Task Management Tool",
    // image: project_3,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${project_1})` }}
    >
      <div className=" py-16 px-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain rounded-xl p-2"
                />
                <div className="p-4 text-gray-700">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
