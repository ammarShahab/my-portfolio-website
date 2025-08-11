import React from "react";
import logo from "../../assets/images/ammar_shahab_logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import DownloadResumeBtn from "../shared/DownloadResumeBtn";

const NavBar = () => {
  return (
    <nav className="bg-[#000000] border-gray-200 dark:bg-gray-900 font-poppins z-20 fixed top-0 w-full">
      <Navbar className="max-w-6xl bg-[#000000] mx-auto px-2 dark:bg-gray-900 flex-nowrap">
        <NavbarBrand>
          <img src={logo} className="h-14 md:h-[35px] lg:h-20" alt="Logo" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#000000] md:text-[12px] lg:text-sm"
            href="#"
          >
            Home
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#000000] md:text-[12px] lg:text-sm"
            href="#about"
          >
            About
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#000000] md:text-[12px] lg:text-sm"
            href="#experience"
          >
            Experience
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#000000] md:text-[12px] lg:text-sm"
            href="#skills"
          >
            Skills
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#000000] md:text-[12px] lg:text-sm"
            href="#projects"
          >
            Projects
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <NavbarLink
            className="relative inline-block group py-2 px-3 md:py-6 text-white hover:!text-white border-b-0 hover:!bg-[#000000] md:text-[12px] lg:text-sm"
            href="#contact"
          >
            Contact Me
            <span className="absolute left-0 bottom-0 h-1 w-full scale-x-0 origin-left bg-amber-300 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavbarLink>
          <DownloadResumeBtn></DownloadResumeBtn>
        </NavbarCollapse>
      </Navbar>
    </nav>
  );
};
export default NavBar;
