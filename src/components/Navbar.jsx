import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  const options = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Projects",
    "Key Skills",
    "Contact",
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } py-4 `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-orange-400">My Portfolio</div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="rounded-xl focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Sun className="text-orange-400" />
            ) : (
              <Moon className="text-orange-600" />
            )}
          </button>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-orange-400 focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full ${
            darkMode ? "bg-black" : "bg-gray-100"
          } md:bg-transparent md:static md:flex md:space-x-6 md:w-auto transition-colors duration-300`}
        >
          <li className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 rounded-xl m-4">
            {options.map((option, index) => (
              <ScrollLink
                key={index}
                to={option}
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-orange-400 text-xl font-bold block cursor-pointer text-center border-2 p-2 rounded-xl"
                onClick={() => setMenuOpen(false)}
              >
                {option}
              </ScrollLink>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
