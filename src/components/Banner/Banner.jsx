import { Cursor, useTypewriter } from "react-simple-typewriter";
import banner1 from "../../assets/images/banner1.jpg";
import DownloadResumeBtn from "../shared/DownloadResumeBtn";
import profilePhoto from "../../assets/images/1000055760-removebg-preview-f3.png";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
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
      <div className="relative z-10 mt-18 md:mt-20 max-w-6xl mx-auto h-full flex items-center px-4 font-poppins">
        <div
          data-aos="fade-right "
          className="flex flex-col-reverse sm:flex-row items-center justify-between"
        >
          <div className="text-white space-y-2 mt-8 sm:mt-0 md:space-y-8 sm:w-1/2">
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

            {/* social media */}
            <div className="flex space-x-3 mt-2 sm:mt-0">
              <div className="flex justify-center gap-5">
                <a
                  href="https://www.facebook.com/ammar.shahab.755217/"
                  target="_blank"
                  aria-label="Facebook"
                  className="text-gray-300 text-xl hover:text-[#fe8d02] transition-colors dark:text-white"
                >
                  <FaFacebookF></FaFacebookF>
                </a>
                {/*  <a
                              href="https://twitter.com"
                              target="_blank"
                              aria-label="Twitter"
                              className="text-gray-300 text-xl hover:text-[#fe8d02] transition-colors dark:text-white"
                            >
                              <FaXTwitter></FaXTwitter>
                            </a> */}
                <a
                  href="https://github.com/ammarShahab"
                  target="_blank"
                  aria-label="Instagram"
                  className="text-gray-300 text-2xl hover:text-[#fe8d02] transition-colors dark:text-white"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-ammar-shahab-88ab4a235/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-gray-300 text-xl hover:text-[#fe8d02] transition-colors dark:text-white"
                >
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </div>
            </div>
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
