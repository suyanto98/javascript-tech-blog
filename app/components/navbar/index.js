"use client"
import {useState} from "react";
import { AiFillChrome } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#191924] h-[80px] flex items-center justify-center text-base sticky top-0 z-10 max-w-md:transition duration-800 ease-in-out">
        <div className="flex justify-between h-[60px] z-1 w-full px-[24px] md:px-0 max-w-[1200px]">
          <div className="w-4/5 px-[6px] flex justify-self-start cursor-pointer text-decoration-none items-center max-w-screen-sm:p-0">
            <Link
              href="#about"
              className="flex items-center text-white ml-[30px] cursor-pointer text-decoration-none "
            >
              <AiFillChrome size="2rem" />
              <div className="px-[4px] font-bold text-[18px] pl-[10px]">
                My Portfolio
              </div>
            </Link>
          </div>
          <div className="block absolute top-3 right-0 transform -translate-x-full translate-y-1/2 text-[1.5rem] cursor-pointer text-[#F2F3F4] md:hidden">
            <FaBars
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <ul className="w-full flex justify-center items-center gap-[32px] pl-[32px] list-none max-md:hidden">
            <Link
              href="#about"
              className="text-[#F2F3F4] font-medium cursor-pointer text-decoration-none transition duration-200 ease-in-out hover:text-[#854CE6]"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-[#F2F3F4] font-medium cursor-pointer text-decoration-none transition duration-200 ease-in-out hover:text-[#854CE6]"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-[#F2F3F4] font-medium cursor-pointer text-decoration-none transition duration-200 ease-in-out hover:text-[#854CE6]"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-[#F2F3F4] font-medium cursor-pointer text-decoration-none transition duration-200 ease-in-out hover:text-[#854CE6]"
            >
              Contact
            </Link>
          </ul>
          <div className="flex items-center justify-end w-full h-full px-[6px] mr-[1.5rem] max-sm:hidden">
            <Link
              href={Bio.gitHub}
              target="_blank"
              className="bg-transparent text-[#854CE6] border-[#854CE6] border-[1.8px] rounded-[20px] flex justify-center items-center px-[20px] text-[1rem] font-[500] cursor-pointer h-[70%] text-decoration-none hover:text-[#FFFFFF] hover:bg-[#854CE6] max-sm:text-[0.8rem]"
            >
              Github Profile
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div
          className={`flex flex-col justify-center gap-[16px] absolute top-[80] right-0 w-full 
            pt-[12px] pr-[40px] pb-[24px] pl-[40px] bg-[#191924] opacity-95 transition-all duration-300 ease-in-out 
            transform ${
              open ? "translate-x-0" : "translate-x-full"
            } rounded-b-2xl shadow-md 
            opacity-${open ? "100" : "0"} z-index-${open ? "999999" : "-1"} block`}
        >
          <Link
            href="#about"
            className="text-[#F2F3F4] font-medium cursor-pointer text-decoration-none transition-all duration-200 
                ease-in-out hover:text-[#854CE6]"
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </Link>

          <Link
            href="#skills"
            className="text-[#F2F3F4] font-medium cursor-pointer text-decoration-none transition-all duration-200 
                ease-in-out hover:text-[#854CE6]"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Skills
          </Link>

          <Link
            href="#projects"
            className="text-[#F2F3F4] font-medium cursor-pointer text-decoration-none transition-all duration-200 
                ease-in-out hover:text-[#854CE6]"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="text-[#F2F3F4] font-medium cursor-pointer text-decoration-none transition-all duration-200 
                ease-in-out hover:text-[#854CE6]"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
