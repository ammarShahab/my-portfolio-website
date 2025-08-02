import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HR, HRTrimmed } from "flowbite-react";
import logo from "../../assets/images/ammar_shahab_logo.png";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div
        /* className={`${
          theme ? "dark" : ""
        }  dark:bg-zinc-600 bg-gradient-to-l from-[#114b5f] via-[#1a936f] to-[#88d498] max-h-screen`} */
        className="dark:bg-zinc-600 bg-[#050505] max-h-screen font-poppins"
      >
        <div
          /* className={`max-w-7xl flex flex-col justify-between px-4 py-2 sm:px-6 lg:px-8 mx-auto space-y-8 lg:flex-row lg:space-y-0 text-gray-800 ${
            theme ? "dark" : ""
          }  dark:bg-zinc-600 `} */
          className="max-w-6xl flex flex-col justify-between px-4 py-2 sm:px-6 lg:px-8 mx-auto space-y-8 lg:flex-row lg:space-y-0 text-gray-800 "
        >
          <div className="lg:w-1/3 flex items-center">
            <span
              rel="noopener noreferrer"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <img src={logo} className="h-14 md:h-20" alt="Logo" />
            </span>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-gray-300 font-bold dark:text-white">
                Contact
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="mailto:info@mywebsite.com"
                    className="text-gray-300 hover:underline  dark:text-white"
                  >
                    ashahab007@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:underline dark:text-white"
                  >
                    +880 1762545131
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="uppercase text-gray-300 dark:text-white font-bold">
                Address
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className=" text-gray-300 dark:text-white"
                    rel="noopener noreferrer "
                  >
                    355 West Shewrapara, Mirpur, Dhaka-1216, Bangladesh
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-gray-300 font-bold dark:text-white sm:text-right">
                Social media
              </div>
              <div className="flex sm:justify-end space-x-3">
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
          </div>
        </div>
        <HR className="max-w-6xl mx-auto bg-[#1f1e1e]"></HR>
        <p className="text-sm text-gray-300 mt-4 text-center">
          Proud to contribute to the ever-growing developer community.
        </p>
      </div>
    </>
  );
};

export default Footer;
