import { useState } from "react";
import NavbarLink from "./NavbarLink";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import DarkModLightMod from "./ui/DarkLightIcon";
import { RiGithubFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed container inset-x-0 top-4 z-50 flex justify-center">
      {/* Floating pill */}
      <div className="flex w-full items-center justify-between gap-4 rounded-full border border-gray-200/80 bg-white/85 px-5 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-primary/85">
        <Link
          to="/"
          className="flex-shrink-0 pl-2 text-xl font-bold tracking-tighter text-accent transition hover:text-accent-hover"
        >
          Vira<span className="text-primary dark:text-white">.</span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          <NavbarLink className="list-none" />
        </ul>

        <div className="hidden items-center gap-2 xl:flex">
          <DarkModLightMod />
          <a
            href="https://github.com/ChamreunVira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub"
            className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <RiGithubFill className="text-xl text-gray-800 dark:text-white" />
          </a>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-2xl transition hover:bg-gray-100 dark:hover:bg-white/10 xl:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <RiCloseLine className="text-primary dark:text-white" />
          ) : (
            <RiMenu3Fill className="text-primary dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed left-4 right-4 top-20 z-40 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-300 dark:border-white/10 dark:bg-primary xl:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6">
          <ul className="flex flex-col items-stretch gap-1 text-lg">
            <NavbarLink
              onNavigate={() => setOpen(false)}
              className="list-none"
            />
          </ul>
          <div className="mt-4 flex justify-center gap-4 border-t border-gray-100 pt-4 dark:border-white/10">
            <DarkModLightMod />
            <a
              href="https://github.com/Vyrabot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub"
              className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <RiGithubFill className="text-2xl text-black dark:text-white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
