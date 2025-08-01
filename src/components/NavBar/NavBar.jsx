import React from "react";
import logo from "../../assets/images/ammar_shahab_logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const NavBar = () => {
  return (
    <nav className="bg-[#0a0d0d] border-gray-200 dark:bg-gray-900 font-poppins">
      <Navbar
        className="max-w-6xl bg-[#0a0d0d] mx-auto px-2 dark:bg-gray-900"
        fluid
        rounded
      >
        <NavbarBrand className="">
          <img src={logo} className="h-14 md:h-20" alt="Logo" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#0a0d0d]"
            href="#"
          >
            Home
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#0a0d0d]"
            href="#experience"
          >
            Experience
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#0a0d0d]"
            href="#skills"
          >
            Skills
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#0a0d0d]"
            href="#projects"
          >
            Projects
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <div className="flex flex-col justify-start sm:items-center sm:justify-center mt-1 sm:mt-0">
            <button
              type="button"
              className="text-white bg-[#F7BE38] hover:bg-gray-800 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 "
            >
              Contact Me
            </button>
          </div>
        </NavbarCollapse>
      </Navbar>
    </nav>
  );
};
export default NavBar;
