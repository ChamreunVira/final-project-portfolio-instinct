import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

function DarkModLightMod() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div
      onClick={() => setDark(!dark)}
      className="dark:text-yellow-400 text-Primery p-4 text-xl md:text-1xl lg:text-3xl cursor-pointer"
    >
      {dark ? <BsSunFill size={18}/> : <FaMoon size={18}/>}
    </div>
  );
}

export default DarkModLightMod;
