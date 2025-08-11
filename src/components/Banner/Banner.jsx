import { Cursor, useTypewriter } from "react-simple-typewriter";
import banner1 from "../../assets/images/banner1.jpg";
import DownloadResumeBtn from "../shared/DownloadResumeBtn";
import profilePhoto from "../../assets/images/1000055760-removebg-preview-f3.png";

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
      className="relative w-full h-[90vh] sm:h-[80vh] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 mt-18 sm:mt-24 max-w-6xl mx-auto h-full flex items-center px-4 font-poppins">
        <div
          data-aos="fade-right "
          className="flex flex-col-reverse sm:flex-row items-center justify-between"
        >
          <div className="text-white space-y-2 mt-10 sm:mt-0 md:space-y-8 sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold ">
              I'm Ammar Shahab
            </h1>
            <p className="text-2xl sm:text-2xl  max-w-xl">
              And I'm a <span className="text-[#F7BE38]">{text} </span>
              <Cursor cursorColor="#F7BE38" />
            </p>
            <p className="text-[10px] sm:text-sm">
              Crafting clean, responsive, and intuitive web experiences with a
              focus on user engagement. Exploring MERN stack development to
              bring ideas to life from concept to deployment.
            </p>
            <DownloadResumeBtn />
          </div>
          <div className="flex justify-start bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden h-48 w-48 sm:h-96 sm:w-96">
            <img className="object-cover" src={profilePhoto} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
