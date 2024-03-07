import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed w-full shadow-md font-serif md:flex md:justify-between grid grid-cols-2 py-4 md:py-5 px-4 md:px-10 text-white bg-neutral-800">

      <div className="col-span-1 text-3xl font-semibold flex space-x-1 items-center"><div>Emerold</div><img className="w-10" alt="" src="logo.svg"></img></div>

      <div
        onClick={() => {
          handleMenu();
        }}
        className="md:hidden col-span-1 flex justify-end"
      >
        <MenuIcon fontSize="large" />
      </div>

      <nav
        className={`md:flex md:space-x-12 text-xl transition-all duration-500 ease-in-out ${
          showMenu
            ? "col-span-2 text-center pt-8 bg-neutral-800 text-white rounded-t-xl"
            : "hidden"
        }`}
      >
        <div className="py-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer">
          Home
        </div>
        <div className="py-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer">
          About
        </div>
        <div className="py-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer">
          Products
        </div>
        <div className="py-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer">
          Services
        </div>
        <div className="pt-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer">
          Contact
        </div>
      </nav>

      <div
        className={`md:flex space-x-3 ${
          showMenu
            ? "col-span-2 flex justify-center py-6 bg-neutral-800 text-white rounded-b-xl"
            : "hidden"
        }`}
      >
        <div className=" hover:text-emerald-500  hover:cursor-pointer">
          <XIcon />
        </div>
        <div className=" hover:text-emerald-500  hover:cursor-pointer">
          <FacebookIcon />
        </div>
        <div className=" hover:text-emerald-500  hover:cursor-pointer">
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
