import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import DarkModLightMod from "./UI/DarkModLightMod";
import { RiGithubFill } from "react-icons/ri";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-primary/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-gray-200 dark:border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-accent tracking-tighter cursor-pointer hover:text-accent-hover transition-colors">
              Portfolio<span className="text-primary dark:text-white">.</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <NavbarLink />
          </ul>

          {/* Desktop Right Side */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <DarkModLightMod />
            <a href="https://github.com/Vyrabot" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <RiGithubFill className="dark:text-white text-gray-800 text-2xl" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-3xl cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? (
              <RiCloseLine className="dark:text-white text-primary" />
            ) : (
              <RiMenu3Fill className="dark:text-white text-primary" />
            )}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white dark:bg-primary z-40 transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          } md:hidden border-t dark:border-gray-800`}
        >
          <div className="flex flex-col h-full p-8">
             <ul className="flex flex-col space-y-6 text-xl font-medium items-center">
                <NavbarLink onClick={() => setOpen(false)} />
             </ul>
             
             <div className="mt-auto flex justify-center gap-4 pb-8">
               <DarkModLightMod />
               <a href="https://github.com/Vyrabot">
                 <RiGithubFill className="dark:text-white text-black text-4xl" />
               </a>
             </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
