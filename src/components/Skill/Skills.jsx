import React from "react";
import skillBg from "../../assets/images/skills4.jpg";

const Skills = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${skillBg})` }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16  gap-10">
        <h3 className="relative text-4xl  font-bold mb-8 uppercase text-center">
          Skills
          {/* Underline Layer 1 */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[8px] w-24 bg-amber-300"></span>
          {/* Underline Layer 2 */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 h-[8px] w-20 bg-amber-400"></span>
          {/* Underline Layer 3 */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-12 h-[8px] w-16 bg-amber-500"></span>
        </h3>
      </div>
    </section>
  );
};

export default Skills;
