import React from "react";
import skillBg from "../../assets/images/skills4.jpg";
import { Button } from "flowbite-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-cover bg-center bg-no-repeat"
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
          {/* Underline Layer 1 */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[4px] w-24 bg-amber-300"></span>
          {/* Underline Layer 2 */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-[4px] w-20 bg-amber-400"></span>
          {/* Underline Layer 3 */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 h-[4px] w-16 bg-amber-500"></span>
        </h3>
        <p className="text-center text-gray-800">
          Behind every polished project lies a collection of <br /> powerful
          tools and libraries — this is the toolkit that helps me translate
          imagination into functional, scalable, and user-focused web
          experiences
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
            HTML
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
          {/*  <Button className="bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Lime
          </Button>
          <Button className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Red
          </Button>
          <Button className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Pink
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Purple
          </Button> */}
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
          {/*  <Button className="bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl ">
            Pink to Orange
          </Button>

          <Button className="bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Teal to Lime
          </Button>
          <Button className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Red to Yellow
          </Button> */}
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
          {/* <Button className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl">
            Red
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
