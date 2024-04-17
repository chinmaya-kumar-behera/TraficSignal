import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { THEME_COLOR } from "../../constant/color.constant";
import { HUMBURGER_INDEX } from "../../constant/zIndex.constant";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { TopicHeadings } from "../../constant/details.project";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center z-10 relative text-left">
      <div className="w-fit flex items-center gap-3 py-2 px-3">
        {/* <span className="text-lg font-barlow-semi-condensed font-bold tracking-wider text-gray-700">
          Project report on : Intelligent Traffic Control System using Artificial Intelligence
        </span> */}
      </div>

      {/* large screen */}
      <div className="py-5 hidden lg:flex items-center gap-10 text-gray-700 cursor-pointer font-barlow-semi-condensed">
        <a href={"#about"} className="hover:text-blue-500 transition-all">
          Author
        </a>
        <Menu className="p-0 m-0" placement="bottom-end">
          <MenuHandler>
            <button>Topics</button>
          </MenuHandler>
          <MenuList className="max-w-[300px] max-h-[500px] bg-gradient-to-br from-indigo-300 to-white overflow-scroll px-2 m-0 z-30 mt-3 text-left">
            {TopicHeadings.map((topic) => (
              <a key={topic.id} href={`#${topic.id}`}>
                <MenuItem
                  className="outline-none hover:bg-gray-200 hover:bg-opacity-60"
                  title={topic.name}
                >
                  <div className="flex gap-4   p-2">
                    <span className="text-semibold">{topic.key}.</span>
                    <span className="truncate">{topic.name}</span>
                  </div>
                </MenuItem>
              </a>
            ))}
          </MenuList>
        </Menu>
        <button className="border border-indigo-500 rounded-xl px-3 py-1.5 filter-blur hover:bg-indigo-500 hover:text-white transition-all hover:shadow-lg">
          Download PDF
        </button>
        {/* <ThemeSwitch /> */}
      </div>

      {/* mobile screen */}
      <div className="mr-4 lg:hidden">
        <button
          onClick={handleMenuToggle}
          className="focus:outline-none"
          style={{ color: THEME_COLOR }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="w-0" style={{ zIndex: HUMBURGER_INDEX }}>
          <div
            className={`${
              isMenuOpen ? "fixed" : "hidden"
            } top-0 left-0 w-full h-full bg-slate-600 opacity-50 filter blur-sm transition-opacity duration-300`}
          />
          <aside
            className={`fixed top-0 right-0 transition-all duration-300 ${
              isMenuOpen ? "w-[250px] md:w-[400px]" : "w-0"
            } h-screen bg-white overflow-y-auto`}
            style={{ zIndex: 100 }}
          >
            <div className="text-blue-500">
              <div className="">
                <button
                  className="p-2"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  style={{ color: THEME_COLOR }}
                >
                  <RxCross2 className="text-2xl" />
                </button>
              </div>

              <div className="flex flex-col gap-5 p-5 text-sm">
                <a
                  href={"#about"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  ABOUT
                </a>
                <a
                  href={"#skills"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  SKILLS
                </a>
                <a
                  href={"#experience"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  EXPERIENCE
                </a>
                <a
                  href={"#projects"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  PROJECTS
                </a>
                <a
                  href={"#contact"}
                  className="hover:text-blue-500 transition-all"
                  onClick={onLinkClick}
                >
                  CONTACT
                </a>

                {/* <ThemeSwitch /> */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
