import React from "react";
import skillBg from "../../assets/images/skills4.jpg";
import { Button } from "flowbite-react";
import reactIcon from "../../assets/tech_logo/react.png";
import tailwindIcon from "../../assets/tech_logo/icons8-tailwindcss-240.png";
import mongoIcon from "../../assets/tech_logo/icons8-mongodb-240.png";
import expressIcon from "../../assets/tech_logo/icons8-express-js-160.png";
import nodeIcon from "../../assets/tech_logo//nodejs.png";
import firebaseIcon from "../../assets/tech_logo/firebase.png";

const skills = [
  { name: "React", icon: reactIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Firebase", icon: firebaseIcon },
];

const Skills = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="2000"
      id="skills"
      className="w-full bg-cover bg-center bg-no-repeat font-poppins py-20"
      style={{ backgroundImage: `url(${skillBg})` }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h3 className="relative text-4xl font-bold mb-12 uppercase text-center text-gray-700">
          Skills
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[4px] w-24 bg-amber-300"></span>
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-[4px] w-20 bg-amber-400"></span>
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 h-[4px] w-16 bg-amber-500"></span>
        </h3>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Behind every polished project lies a collection of powerful tools and
          libraries — this is the toolkit that helps me translate imagination
          into functional, scalable, and user-focused web experiences.
        </p>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              /*  className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl" */
              className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/25"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-500 drop-shadow-lg">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /* <section
      id="skills"
      className="w-full bg-cover bg-center bg-no-repeat font-poppins"
      style={{ backgroundImage: `url(${skillBg})` }}
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-6xl mx-auto px-6 py-16 gap-10"
      >
        <h3 className="relative text-4xl font-bold mb-12 uppercase text-center text-gray-700">
          Skills
        
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[4px] w-24 bg-amber-300"></span>
         
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-[4px] w-20 bg-amber-400"></span>
          
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 h-[4px] w-16 bg-amber-500"></span>
        </h3>
        <p className="text-center text-gray-700">
          Behind every polished project lies a collection of powerful tools and
          libraries — this is the toolkit that helps me translate imagination
          into functional, scalable, and user-focused web experiences
        </p>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="grid grid-cols-1 sm:grid-cols-3 justify-around  max-w-6xl mx-auto "
      >
        <div className="flex flex-col items-center gap-4">
          <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl ">
            <img src={react} alt="" srcset="" />
          </Button>

          <Button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Framer Motion
          </Button>
          <Button className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Express.js
          </Button>
          <Button className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Prompt Engineering
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl mt-4 sm:mt-0">
            CSS
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl ">
            Javascript
          </Button>
          <Button className="bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Node.js
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            React.js
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4 mb-10">
          <Button className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl mt-4 sm:mt-0">
            Tailwind
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            MongoDB
          </Button>

          <Button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Git and Github
          </Button>
          <Button className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Vercel
          </Button>
          <Button className="bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Firebase
          </Button>
         
        </div>
      </div>
    </section> */
};

export default Skills;
