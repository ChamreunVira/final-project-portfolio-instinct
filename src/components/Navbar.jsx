import { useState } from "react";
import NavbarLink from "./NavbarLink";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import DarkModLightMod from "./ui/DarkModLightMod";
import { RiGithubFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200/80 bg-white/85 backdrop-blur-xl transition-colors dark:border-white/5 dark:bg-primary/85">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex-shrink-0 text-2xl font-bold tracking-tighter text-accent transition hover:text-accent-hover">
          Vira<span className="text-primary dark:text-white">.</span>
        </Link>

        <ul className="hidden items-center gap-5 xl:flex">
          <NavbarLink className="list-none" />
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <DarkModLightMod />
          <a href="https://github.com/ChamreunVira" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub" className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800">
            <RiGithubFill className="text-2xl text-gray-800 dark:text-white" />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-3xl transition hover:bg-gray-100 dark:hover:bg-gray-800 xl:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <RiCloseLine className="text-primary dark:text-white" /> : <RiMenu3Fill className="text-primary dark:text-white" />}
        </button>
      </div>

      <div className={`fixed left-0 top-20 z-40 h-[calc(100vh-80px)] w-full border-t border-gray-200 bg-white transition-transform duration-300 dark:border-gray-800 dark:bg-primary xl:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex h-full flex-col p-8">
          <ul className="flex flex-col items-center gap-6 text-xl">
            <NavbarLink onNavigate={() => setOpen(false)} className="list-none" />
          </ul>
          <div className="mt-auto flex justify-center gap-4 pb-8">
            <DarkModLightMod />
            <a href="https://github.com/Vyrabot" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub">
              <RiGithubFill className="text-4xl text-black dark:text-white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
