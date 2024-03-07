import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex md:flex-row flex-row-reverse py-3 justify-between md:items-center px-4 md:px-20 bg-gradient-to-r from-emerald-100 to bg-emerald-400 font-serif">
      <div className="text-2xl md:text-4xl">Emerold</div>

      <div className="">
        <button
          onClick={() => {
            handleMenu();
          }}
          className="md:hidden"
        >
          <img className="w-8" alt="" src="menu-icon.svg"></img>
        </button>

        <ul
          className={`md:flex md:space-x-6 text-lg transition-transform duration-500 ease-in-out transform
          ${showMenu ? "mt-2 pl-1" : "hidden"}
          `}
        >
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
