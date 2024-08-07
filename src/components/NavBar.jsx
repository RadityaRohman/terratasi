import { useEffect, useState } from "react";
import { navigation } from "../constants";
import { terratasi } from "../assets";
import toast, { Toaster } from "react-hot-toast";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    const handleColor = () => {
      if (window.scrollY >= 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleColor);

    return () => {
      window.removeEventListener("scroll", handleColor);
    };
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <nav
        className={`font-poppins z-50 top-0 start-0 fixed w-full border-gray-600 backdrop-blur-lg border-b`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={terratasi} alt="Logo" width={20} height={20} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-gradient-1 to-gradient-2 text-transparent bg-clip-text drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-800/25">
              TerraTasi
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={nav}
            onClick={handleNav}
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
          <div
            className={`${
              nav ? "block" : "hidden"
            } md:flex items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-dropdown"
          >
            <ul className="nav flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navigation.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    href={item.url}
                    className={`leading text-base text-color-slate-gray font-poppins font-normal lg:hover:text-white block ${
                      navBg ? "text-white" : "text-color-slate-gray"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
