import React from "react";
import { FaBriefcase, FaCode } from "react-icons/fa";
import bgExperience from "../../assets/images/experience_bg.avif"; // replace with your image path

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgExperience})`,
      }}
    >
      <div className="bg-gradient-to-b  to-black/90 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Section Title */}
          <h2 className="text-white text-4xl font-bold uppercase mb-4">
            My Experience
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-16">
            Showcasing my journey and milestones in the world of development
          </p>

          {/* Experience Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
            {/* Card 1: Professional Experience */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-[300px] hover:shadow-xl transition duration-500 hover:scale-105 flex-1">
              <div className="flex justify-center mb-4 animate-bounce">
                <FaBriefcase className="text-5xl text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Professional Experience
              </h3>
              <p className="text-gray-300">
                Fresher – eager to learn and grow in real-world environments.
              </p>
            </div>

            {/* Card 2: Projects Done */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-[300px] hover:shadow-xl transition duration-500 hover:scale-105 flex-1">
              <div className="flex justify-center mb-4 animate-bounce">
                <FaCode className="text-5xl text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Projects Completed
              </h3>
              <p className="text-gray-300">
                3 meaningful projects showcasing diverse skillsets and
                creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
