import { Cursor, useTypewriter } from "react-simple-typewriter";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Creative Thinker",
      "Tech Explorer",
      "Lifelong Learner",
      "UI Enthusiast",
      "Builder of Tomorrow",
    ],
    loop: 0,
    // onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div
      className="relative w-full h-[500px] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-4 font-poppins">
        <div data-aos="fade-right" className="text-white space-y-8">
          <h1 className="text-6xl font-bold ">I'm Ammar Shahab</h1>
          <p className="text-3xl max-w-xl">
            And I'm a <span className="text-[#F7BE38]">{text} </span>
            <Cursor cursorColor="#F7BE38" />
          </p>
          <p>
            I craft responsive and dynamic web experiences with modern
            technologies.
            <br />
            Click below to learn more about me.
          </p>
          <button
            type="button"
            className="text-white bg-[#F7BE38] hover:bg-gray-800 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
