import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import bgExperience from "../../assets/images/experience_bg.avif"; // replace with your image path

const EducationalQualification = () => {
  return (
    <section
      id="education"
      className="bg-fixed bg-center bg-no-repeat bg-cover font-poppins"
      style={{
        backgroundImage: `url(${bgExperience})`,
      }}
    >
      <div className="bg-gradient-to-b to-black/90 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Section Title */}
          <h2
            data-aos="fade-right"
            className="text-white text-4xl font-bold uppercase mb-4"
          >
            Educational Qualification
          </h2>
          <p
            data-aos="fade-right"
            className="text-gray-300 text-lg md:text-xl mb-16"
          >
            My academic journey and milestones
          </p>

          {/* Education Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
            {/* Card 1: Master's Degree */}
            <div
              data-aos="flip-left"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-[300px] hover:shadow-xl transition duration-500 hover:scale-105 flex-1"
            >
              <div className="flex justify-center mb-4 animate-bounce">
                <FaGraduationCap className="text-5xl text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Master of Pharmacy (M.Pharm)
              </h3>
              <p className="text-gray-300">
                State University of Bangladesh — Graduated in 2017
              </p>
            </div>

            {/* Card 2: Bachelor's Degree */}
            <div
              data-aos="flip-right"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-[300px] hover:shadow-xl transition duration-500 hover:scale-105 flex-1"
            >
              <div className="flex justify-center mb-4 animate-bounce">
                <FaUniversity className="text-5xl text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Bachelor of Pharmacy (B.Pharm)
              </h3>
              <p className="text-gray-300">
                University of Asia Pacific — Graduated in 2009
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalQualification;
