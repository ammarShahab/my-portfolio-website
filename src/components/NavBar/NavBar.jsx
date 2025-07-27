import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );

  /* <nav className="bg-[#0a0d0d] border-gray-200 dark:bg-gray-900 font-poppins">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#0a0d0d] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <a
                href="#"
                className="relative inline-block group py-2 px-3 md:py-6 text-white md:dark:hover:text-blue-500"
              >
                Home
                <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block group py-2 px-3 md:py-6 text-white md:dark:hover:text-blue-500"
              >
                Experience
                <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block group py-2 px-3 md:py-6 text-white md:dark:hover:text-blue-500"
              >
                Skills
                <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block group py-2 px-3 md:py-6 text-white md:dark:hover:text-blue-500"
              >
                Projects
                <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li className="flex flex-col items-center justify-center">
              <button
                type="button"
                className="text-white bg-[#F7BE38] hover:bg-gray-400 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 "
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav> */
};
export default NavBar;
