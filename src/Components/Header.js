import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClose = ()=>{
    setShowMenu(false);
  }

  return (
    <div className="fixed z-20 w-full shadow-md shadow-black font-serif md:flex md:justify-between grid grid-cols-2 py-3 md:py-4 px-4 md:px-10 text-white bg-neutral-800">

      <div className="col-span-1 text-3xl font-semibold flex space-x-1 items-center"><div>Emerold</div><img className="w-10" alt="" src="logo.svg"></img></div>

      <div
        onClick={() => {
          handleMenu();
        }}
        className={`md:hidden col-span-1 flex justify-end items-center ${showMenu?"text-emerald-500":"texh-white"}`}
      >
        <MenuIcon fontSize="large" />
      </div>

      <nav
        className={`md:flex md:space-x-12 text-xl md:text-lg  ${
          showMenu
            ? "col-span-2 text-center pt-8 bg-neutral-800 text-white rounded-t-xl"
            : "hidden"
        }`}
      >
        <Link to={"/"}
        onClick={()=>{handleMenuClose()}}
        >
        <div className="py-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer transition-all duration-300">
          Home
        </div>
        </Link>

        <Link to={"/about"}
        onClick={()=>{handleMenuClose()}}
        >
        <div className="py-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer transition-all duration-300">
          About
        </div>
        </Link>
       
        <Link to={"/products"}
        onClick={()=>{handleMenuClose()}}
        >
        <div className="py-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer transition-all duration-300">
          Products
        </div>
        </Link>
        
        <Link to={"/services"}
        onClick={()=>{handleMenuClose()}}
        >
        <div className="py-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer transition-all duration-300">
          Services
        </div>
        </Link>

        <Link to={"/contactheader"}
        onClick={()=>{handleMenuClose()}}
        >
        <div className="py-1 md:py-auto hover:text-emerald-500 hover:cursor-pointer transition-all duration-300">
          Contact
        </div>
        </Link>
      </nav>

      <div
        className={`md:flex md:items-center space-x-3 ${
          showMenu
            ? "col-span-2 flex justify-center py-6 bg-neutral-800 text-white rounded-b-xl"
            : "hidden"
        }`}
      >
        <div className=" hover:text-emerald-500  hover:cursor-pointer transition-all duration-300">
          <XIcon />
        </div>
        <div className=" hover:text-emerald-500  hover:cursor-pointer transition-all duration-300">
          <FacebookIcon />
        </div>
        <div className=" hover:text-emerald-500  hover:cursor-pointer transition-all duration-300">
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
